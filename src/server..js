import { createServer, Model, Response } from "miragejs"


createServer({
    models: {
        vans: Model,
        users: Model
    },

    seeds(server) {
        server.create("van", { id: "1", name: "Maasai Mara", price: 60, description: "The Maasai Mara Game Reserve, located in southwestern Kenya, is one of Africa's most famous and renowned wildlife conservation areas. Here's a description:What makes the Maasai Mara particularly special is its remarkable biodiversity and role in the Great Migration, a natural spectacle considered one of the world's most breathtaking wildlife events.", imageUrl: "https://www.micato.com/wp-content/uploads/2018/09/maasai-mara-1110x700.jpg", type: "simple", hostId: "123" })
        server.create("van", { id: "2", name: "Serengeti", price: 80, description: "The Serengeti National Park is a world-famous wildlife conservation area situated in northern Tanzania, extending into southwestern Kenya. It is often considered one of Africa's most remarkable natural wonders, known for its immense savannahs, diverse wildlife, and annual Great Migration.", imageUrl: "https://bigtimesafaris.co.ke/wp-content/uploads/2018/09/Samburu-National-Reserve.jpg", type: "standard", hostId: "123" })
        server.create("van", { id: "3", name: "Amboseli", price: 100, description: "Amboseli National Park is one of Kenya's most renowned and picturesque wildlife conservation areas. Located in the southern part of Kenya near the Tanzanian border, it offers stunning views of Mount Kilimanjaro, Africa's highest peak.", imageUrl: "https://lp-cms-production.imgix.net/2019-06/148309239_full.jpg", type: "luxury", hostId: "123" })
        server.create("van", { id: "4", name: "Nairobi National Park", price: 65, description: "Nairobi National Park is a unique and remarkable wildlife conservation area located just a short drive from the bustling city center of Nairobi, Kenya. It is one of the few national parks in the world that is situated within a capital city's boundaries.", imageUrl: "https://www.tripsavvy.com/thmb/vvubWyi6WDlApf1O9c3NpShXsGk=/2125x1411/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-581001645-5bcd85f8c9e77c005172f741.jpg", type: "simple", hostId: "123" })
        server.create("van", { id: "5", name: "Lake Naivasha", price: 120, description: "Lake Naivasha is a picturesque freshwater lake located in the Great Rift Valley of Kenya. It's one of the country's most popular destinations for both tourists and locals due to its stunning natural beauty and diverse range of activities.", imageUrl: "https://www.wildlifekenyasafari.com/wp-content/uploads/2021/09/Frontpage-Slide-2.jpg", type: "luxury", hostId: "123" })
        server.create("van", { id: "6", name: "Lake Victoria", price: 70, description: "Lake Victoria, the largest lake in Africa and the second-largest freshwater lake in the world, offers a range of tourist attractions and activities for visitors to enjoy. Located in East Africa and bordered by Kenya, Tanzania, and Uganda, Lake Victoria has a rich cultural and natural heritage. ", imageUrl: "https://www.tanzaniatourism.com/images/made/images/uploads/Lake_Victoria_Bismark_Rocks_1_1590_510shar-50brig-20_c1.jpg", type: "standard", hostId: "123" })
        server.create("user", { id: "123", email: "b@b.com", password: "p123", name: "Bob" })
    },

    routes() {
        this.namespace = "api"
        this.logging = false
        // this.timing = 2000

        this.get("/vans", (schema, request) => {
            // return new Response(400, {}, {error: "Error fetching data"})
            return schema.vans.all()
        })

        this.get("/vans/:id", (schema, request) => {
            const id = request.params.id
            return schema.vans.find(id)
        })

        this.get("/host/vans", (schema, request) => {
            // Hard-code the hostId for now
            return schema.vans.where({ hostId: "123" })
            // return schema.vans.all()
        })

        this.get("/host/vans/:id", (schema, request) => {
            // Hard-code the hostId for now
            const id = request.params.id
            return schema.vans.findBy({ id, hostId: "123" })
        })

        this.post("/login", (schema, request) => {
            const { email, password } = JSON.parse(request.requestBody)
            // This is an extremely naive version of authentication. Please don't
            // do this in the real world, and never save raw text passwords
            // in your database 😇
            const foundUser = schema.users.findBy({ email, password })
            if (!foundUser) {
                return new Response(401, {}, { message: "No user with those credentials found!" })
            }

            // At the very least, don't send the password back to the client 😅
            foundUser.password = undefined
            return {
                user: foundUser,
                token: "Enjoy your pizza, here's your tokens."
            }
        })
    }
})






