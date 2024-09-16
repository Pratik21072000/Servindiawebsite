import React from "react";

const Body = () => {
  const categories = [
    {
      id: 1,
      title: "Beauty Parlor",
      description: "Find the best beauty parlors near you.",
      image:
        "https://media.istockphoto.com/id/1336649728/photo/beautiful-traditional-indian-bride-getting-ready-for-her-wedding-day-by-makeup-artist.jpg?s=2048x2048&w=is&k=20&c=3KogqaC3RfZjE0OyWi9P7hLU2AZ6jBjXWKAJf0uaG90=",
    },
    {
      id: 2,
      title: "Hospitals",
      description: "Find top-rated hospitals for your needs.",
      image:
        "https://media.istockphoto.com/id/1130934349/photo/doctor-doing-social-service-in-village.jpg?s=2048x2048&w=is&k=20&c=xeS0_YA7H2KsGg1q-mnct91PGlihDuoOOwOxcLHxAKI=",
    },
    {
      id: 3,
      title: "Medicals",
      description: "Purchase medicines from trusted medicals.",
      image:
        "https://media.istockphoto.com/id/1295918822/photo/uses-laptop-while-talking-with-patient-stock-photo.jpg?s=2048x2048&w=is&k=20&c=C_Av22dwc5T2AAJd6HsmddAeW5fDBilxql6yiI8_d9Y=",
    },
    {
      id: 4,
      title: "Grocery Shops",
      description: "Get groceries delivered to your doorstep.",
      image:
        "https://media.istockphoto.com/id/1157106624/photo/all-your-necessities-stored-in-one-place.jpg?s=2048x2048&w=is&k=20&c=TuaXfsf0BWWrMEXDKNuP2gMG8IRx0WOssjlGYuirkGU=",
    },
    {
      id: 5,
      title: "Doctor",
      description:
        "Consult with experienced doctors for expert medical advice and treatments. Ensure your health with professional care right at your fingertips.",
      image:
        "https://media.istockphoto.com/id/1418999467/photo/doctors-comforting-disabled-elderly-patient.jpg?s=1024x1024&w=is&k=20&c=MV-4Xqd0g9RcEVJo9bcbeadNFSRgQwDw63Y6bYH-efc=",
    },
    {
      id: 6,
      title: "Salon",
      description:
        "Experience top-notch beauty and grooming services at your convenience. Pamper yourself with a range of salon treatments tailored to your needs.",
      image:
        "https://media.istockphoto.com/id/1678319628/photo/woman-getting-hair-style-and-hair-dry-at-beauty-salon.jpg?s=1024x1024&w=is&k=20&c=hvQFpDmhhzebomV-IW1M7p7kCSUcrO5QgN8Q2a9Lbww=",
    },
    {
      id: 7,
      title: "Farmer",
      description:
        "Access fresh and locally sourced produce directly from the farm. Support sustainable agriculture and enjoy farm-to-table quality.",
      image:
        "https://plus.unsplash.com/premium_photo-1682092034268-645322c1d308?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      title: "Stationary Shop",
      description:
        "Find all your stationery needs in one place. From notebooks to office supplies, get everything you need to stay organized and productive.",
      image:
        "https://images.unsplash.com/photo-1568871391149-449702439177?q=80&w=1832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 9,
      title: "Sweet Home",
      description:
        "Discover a range of home essentials and decorative items. Transform your living space with high-quality products and stylish designs.",
      image:
        "https://media.istockphoto.com/id/1277473423/photo/mother-and-daughters-tasting-indian-sweet-laddoos-while-preparing.jpg?s=1024x1024&w=is&k=20&c=-xi4UVY8-8e5BtqF-Ntfn5-oGSWc2EKJPOv0VZuKcJY=",
    },
    {
      id: 10,
      title: "Hotel",
      description:
        "Book your stay at comfortable and luxurious hotels. Enjoy exceptional hospitality and modern amenities for a memorable experience.",
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 11,
      title: "Transport",
      description:
        "Arrange reliable transportation services for your travel needs. Choose from various options for a convenient and efficient journey.",
      image:
        "https://plus.unsplash.com/premium_photo-1682092823772-b966cf1240c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 12,
      title: "Garage",
      description:
        "Get your vehicle serviced and repaired with professional expertise. Ensure your car runs smoothly with top-notch garage services.",
      image:
        "https://plus.unsplash.com/premium_photo-1675810093919-88ab8d29f896?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGluZGlhbiUyMGdhcmFnZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 13,
      title: "Electrician",
      description:
        "Hire skilled electricians for all your electrical needs. From installations to repairs, get safe and efficient solutions for your home or business.",
      image:
        "https://plus.unsplash.com/premium_photo-1678766819153-b3f7307c5127?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 14,
      title: "Plumber",
      description:
        "Address your plumbing issues with expert solutions. Get reliable and prompt plumbing services to keep your home running smoothly..",
      image:
        "https://media.istockphoto.com/id/1448865921/photo/close-up-of-plumber-is-repairing-faucet-of-a-sink-at-bathroom-using-adjustable-wrench.jpg?s=1024x1024&w=is&k=20&c=F4nagbxoyACo1oWXE08I9WAt4szFNWWdU9foVH4GyAs=",
    },
    {
      id: 15,
      title: "Carpenter",
      description:
        "Find experienced carpenters for custom woodwork and repairs. Enhance your home with quality craftsmanship and tailored wooden solutions",
      image:
        "https://plus.unsplash.com/premium_photo-1667520166318-8cc851e2d51c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    // Add more categories as needed
  ];
  return (
    <div>
      <section className="bg-blue-900 py-10 mt-40  lg:mt-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-10">
            Our Categories/Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center hover:shadow-2xl transition duration-300 transform hover:scale-105"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-40 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-2xl font-semibold text-blue-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <button className="px-4 py-2 bg-coral-500 text-white rounded-full hover:bg-coral-600 transition duration-300">
                  Explore
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services/Products Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-8">
            Featured Services
          </h2>
          <p className="text-gray-600">
            Discover some of our top services and products.
          </p>
          {/* Add cards or images here to showcase featured services/products */}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-blue-900 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-10">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ps-3 pe-3">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 italic">
                "Excellent services! Highly recommended."
              </p>
              <p className="text-coral-500 font-semibold mt-4">John Doe</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 italic">
                "Very user-friendly platform."
              </p>
              <p className="text-coral-500 font-semibold mt-4">Jane Smith</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 italic">"Great customer support."</p>
              <p className="text-coral-500 font-semibold mt-4">Sam Wilson</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="bg-coral-500 py-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-black mb-6">
            Subscribe to our newsletter for the latest updates.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-full text-blue-900 bg-white border border-coral-300 focus:outline-none focus:border-coral-600"
          />
          <button className="ml-4 px-6 py-2 bg-blue-900 text-white rounded-full hover:bg-blue-700 transition duration-300">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default Body;
