import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "./Value.css";

const employees = [
  {
    name: "Mr. Johnathan Davis",
    role: "Real Estate Agents",
    description:
      "Our real estate agents are dedicated to helping you find the perfect property. They have extensive knowledge of the market and are committed to providing excellent service.",
    image: "./p1.png",
    details: [
      "Conduct market analysis and research to advise clients on property pricing.",
      "Negotiate contracts and oversee property transactions from start to finish.",
      "Provide personalized tours of properties based on client preferences.",
    ],
  },
  {
    name: "Ms. Emily Harris",
    role: "Financial Advisors",
    description:
      "Our financial advisors assist you in making informed decisions about your property investments. They offer expert advice to help you navigate financial options and maximize your investment.",
    image: "./p2.jpg",
    details: [
      "Offer tailored financial strategies to optimize real estate investments.",
      "Assist in securing financing options and refinancing solutions.",
      "Analyze investment opportunities and provide risk assessment reports.",
    ],
  },
  {
    name: "Ms. Jessica Martinez",
    role: "Property Managers",
    description:
      "Our property managers ensure that your property is well-maintained and managed efficiently. They handle everything from tenant relations to property maintenance.",
    image: "./p3.jpg",
    details: [
      "Maintain detailed records of property maintenance and repairs.",
      "Coordinate with contractors and vendors for property improvements.",
      "Handle tenant inquiries and resolve disputes in a timely manner.",
    ],
  },
  {
    name: "Mr. David Brown",
    role: "Legal Advisors",
    description:
      "Our legal advisors provide guidance on all legal aspects of real estate transactions. They ensure that all your property dealings comply with the law.",
    image: "./p4.jpg",
    details: [
      "Draft and review legal documents, including leases and purchase agreements.",
      "Ensure compliance with local and national real estate laws and regulations.",
      "Represent clients in legal proceedings related to property disputes.",
    ],
  },
  {
    name: "Ms. Karen Walker",
    role: "Appraisers",
    description:
      "Our appraisers provide accurate property valuations to help you understand the true value of your property. They have a keen eye for detail and extensive market knowledge.",
    image: "./p5.jpg",
    details: [
      "Conduct thorough inspections and evaluations of properties.",
      "Prepare comprehensive appraisal reports detailing property values.",
      "Provide expert testimony in property valuation cases.",
    ],
  },
  {
    name: "Ms. Olivia Wilson",
    role: "Interior Designers",
    description:
      "Our interior designers help you create beautiful and functional living spaces. They offer professional advice on how to make the most of your property’s interior.",
    image: "./p6.jpg",
    details: [
      "Create customized interior design plans tailored to client preferences.",
      "Source and recommend furniture, decor, and materials for home staging.",
      "Collaborate with architects and contractors to ensure design integrity.",
    ],
  },
];

const Value = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="value" className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.jpg" alt="Value" />
          </div>
        </div>

        {/* right */}
        <div className="flexColStart v-right">
          <span className="orangeText">About us</span>
          <span className="primaryText">
            Discover Your Perfect Home with Us
          </span>
          <span className="secondaryText">
            At <b>House Heaven</b>, we are dedicated to providing unparalleled
            real estate services to both buyers and sellers. Our mission is to
            simplify the process of buying and selling properties, ensuring a
            seamless and rewarding experience for our clients.
            <br />
            <br />
            Whether you are looking for your dream home or seeking the best deal
            for your property, our team of experienced professionals is here to
            guide you every step of the way. We believe that finding the right
            place to live can significantly enhance your quality of life, and we
            are committed to helping you achieve that goal.
            <br />
            <br />
            Our comprehensive listings include a wide range of properties to
            suit every need and budget. From cozy apartments to luxurious
            estates, we have something for everyone. With our extensive market
            knowledge and personalized approach, we strive to make your real
            estate journey as smooth and successful as possible.
            <br />
            <br />
            Join us and explore the best opportunities in the real estate
            market. We are always ready to assist you in finding the perfect
            place to call home.
            <br />
            <br />
            <br />
          </span>
        </div>
      </div>

      <div className="paddings innerWidth ">
        {/* employee section */}
        <span className="orangeText">Meet Our Experts</span><br/>
        <span className="primaryText">
          Your Dream Home Awaits - Let Us Guide You There
        </span>
        
        <div className="employee-section">
          <Slider {...settings}>
            {employees.map((employee, index) => (
              <div key={index} className="employee-slide">
                <div className="employee-content">
                  <div className="employee-image">
                    <img src={employee.image} alt={employee.role} />
                  </div>
                  <div className="employee-info">
                    <p style={{fontSize:"22px", fontWeight:"revert-layer"}}>{employee.name}</p>
                    <h4>{employee.role}</h4>
                    <p>{employee.description}</p>
                    <p>{employee.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Value;
