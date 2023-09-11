import { createServer, Model, Response } from "miragejs";

createServer({
  models: {
    camps: Model,
    users: Model,
  },

  seeds(server) {
    server.create("camp", {
      id: "1",
      name: "Maasai Mara",
      price: 60,
      description:
        "The Maasai Mara Game Reserve, located in southwestern Kenya, is one of Africa's most famous and renowned wildlife conservation areas. Here's a description:What makes the Maasai Mara particularly special is its remarkable biodiversity and role in the Great Migration, a natural spectacle considered one of the world's most breathtaking wildlife events.",
      imageUrl:
        "https://www.micato.com/wp-content/uploads/2018/09/maasai-mara-1110x700.jpg",
      type: "simple",
      hostId: "123",
      image2:
        "https://ichef.bbci.co.uk/news/976/cpsprodpb/17E8A/production/_120803979_gettyimages-952005708_976.png",
        image3:"https://www.maasaimarakenyapark.com/wp-content/uploads/2018/12/banner-masai-mara-game-reserve-750x450.jpg",
        image4:"https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6b/8f/cf.jpg"
    });
    server.create("camp", {
      id: "2",
      name: "Serengeti",
      price: 80,
      description:
        "The Serengeti National Park is a world-famous wildlife conservation area situated in northern Tanzania, extending into southwestern Kenya. It is often considered one of Africa's most remarkable natural wonders, known for its immense savannahs, diverse wildlife, and annual Great Migration.",
      imageUrl:
        "https://bigtimesafaris.co.ke/wp-content/uploads/2018/09/Samburu-National-Reserve.jpg",
      type: "standard",
      hostId: "123",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRppoKtg3-Zll7GLeB2MmwO1cOXp8sQujkszPOoS0Ud8qykkMaJoIrjdQKC7Teg0OyaRdo&usqp=CAU",
        image3:"https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/2d/15/84.jpg",
        image4:"https://www.kenyawildlifetours.com/wp-content/uploads/2021/04/serengeti-national-park-1.jpg"
    });
    server.create("camp", {
      id: "3",
      name: "Amboseli",
      price: 100,
      description:
        "Amboseli National Park is one of Kenya's most renowned and picturesque wildlife conservation areas. Located in the southern part of Kenya near the Tanzanian border, it offers stunning views of Mount Kilimanjaro, Africa's highest peak.",
      imageUrl:
        "https://africaadventurevacations.com/wp-content/uploads/2021/09/Amboseli-National-park-weather.jpg",
      type: "luxury",
      hostId: "123",
      image2:"https://www.amboseliparkkenya.com/wp-content/uploads/2023/06/Best-of-Amboseli-National-Park.jpg",
      image3:"https://mediaim.expedia.com/destination/1/bff5313997b34465f1a524e2cf763809.jpg",
      image4:"https://africasafaritrips.com/wp-content/uploads/sites/9/2021/09/ambosel-3.jpg"
    });
    server.create("camp", {
      id: "4",
      name: "Nairobi National Park",
      price: 65,
      description:
        "Nairobi National Park is a unique and remarkable wildlife conservation area located just a short drive from the bustling city center of Nairobi, Kenya. It is one of the few national parks in the world that is situated within a capital city's boundaries.",
      imageUrl:
        "https://www.tripsavvy.com/thmb/vvubWyi6WDlApf1O9c3NpShXsGk=/2125x1411/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-581001645-5bcd85f8c9e77c005172f741.jpg",
      type: "simple",
      hostId: "123",
      image2:"https://karenblixengroup.com/wp-content/uploads/2018/03/nairobinationalparks-web.jpg",
      image3:"https://www.kenya-experience.com/wp-content/gallery/nairobi-nationalpark-single/featured-Nairobi-National-Park-Maciej-Sudra_12.jpg",
      image4:"https://www.xinhuanet.com/english/2019-12/22/138650528_15770248237171n.jpg"
    });
    server.create("camp", {
      id: "5",
      name: "Lake Naivasha",
      price: 120,
      description:
        "Lake Naivasha is a picturesque freshwater lake located in the Great Rift Valley of Kenya. It's one of the country's most popular destinations for both tourists and locals due to its stunning natural beauty and diverse range of activities.",
      imageUrl:
        "https://www.wildlifekenyasafari.com/wp-content/uploads/2021/09/Frontpage-Slide-2.jpg",
      type: "luxury",
      hostId: "123",
      image2:"https://www.southriftgalaxysafaris.com/blog/wp-content/uploads/2015/12/Lake-Naivasha.jpg",
      image3:"https://ecoadventuresafaris.com/wp-content/uploads/2021/09/Lake-Nakuru-National-Park1.jpg",
      image4:"https://naivashahotels.com/kenya/wp-content/uploads/2022/06/Lake-Naivasha-Sopa-Resort-80-scaled.jpg"
    });
    server.create("camp", {
      id: "6",
      name: "Lake Victoria",
      price: 70,
      description:
        "Lake Victoria, the largest lake in Africa and the second-largest freshwater lake in the world, offers a range of tourist attractions and activities for visitors to enjoy. Located in East Africa and bordered by Kenya, Tanzania, and Uganda, Lake Victoria has a rich cultural and natural heritage. ",
      imageUrl:
        "https://www.tanzaniatourism.com/images/made/images/uploads/Lake_Victoria_Bismark_Rocks_1_1590_510shar-50brig-20_c1.jpg",
      type: "standard",
      hostId: "123",
      image2:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/55/8e/b8/photo0jpg.jpg?w=500&h=-1&s=1",
      image3:"https://www.wakenyawataliitourstravel.com/wp-content/uploads/2021/05/Kit-mikayi-Kisumu-1024x576.jpg",
      image4:"https://www.eastafricasafaristours.com/wp-content/uploads/2021/12/grazing.jpg"
    });
    server.create("user", {
      id: "123",
      email: "b@b.com",
      password: "p123",
      name: "Bob",
    });
  },

  routes() {
    this.namespace = "api";
    this.logging = false;

    this.get("/camps", (schema, request) => {
      // return new Response(400, {}, {error: "Error fetching data"})
      return schema.camps.all();
    });

    this.get("/camps/:id", (schema, request) => {
      const id = request.params.id;
      return schema.camps.find(id);
    });

    this.get("/host/camps", (schema, request) => {
      // Hard-code the hostId for now
      return schema.camps.where({ hostId: "123" });
      // return schema.vans.all()
    });

    this.get("/host/camps/:id", (schema, request) => {
      // Hard-code the hostId for now
      const id = request.params.id;
      return schema.camps.findBy({ id, hostId: "123" });
    });

    this.post("/login", (schema, request) => {
      const { email, password } = JSON.parse(request.requestBody);
      // This is an extremely naive version of authentication. Please don't
      // do this in the real world, and never save raw text passwords
      // in your database 😇
      const foundUser = schema.users.findBy({ email, password });
      if (!foundUser) {
        return new Response(
          401,
          {},
          { message: "No user with those credentials found!" }
        );
      }

      // At the very least, don't send the password back to the client 😅
      foundUser.password = undefined;
      return {
        user: foundUser,
        token: "Enjoy your pizza, here's your tokens.",
      };
    });
  },
});
