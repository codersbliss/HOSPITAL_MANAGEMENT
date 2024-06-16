import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          ZeeCare is an innovative online platform dedicated to promoting health and wellness. With a comprehensive approach, ZeeCare provides a wealth of resources tailored to various aspects of well-being, including physical fitness, mental health, nutrition, and lifestyle tips. The website features informative articles, practical advice, and tools designed to help individuals make informed decisions about their health. Whether you're looking to adopt healthier habits, manage stress, or stay informed about the latest health trends, ZeeCare offers reliable and accessible information to support your journey.
          </p>
          {/* <p>We are all in 2024!</p>
          <p>We are working on a MERN STACK PROJECT.</p> */}
          <p>
          In addition to its rich content, ZeeCare stands out for its user-friendly interface and well-organized layout, making it easy for users to find the information they need. The platform is designed to be inclusive and helpful for a wide audience, from health enthusiasts to those seeking guidance on specific health issues. ZeeCare's mission is to empower users with knowledge and practical strategies to enhance their overall well-being, making it a valuable resource for anyone committed to living a healthier, more balanced life. Whether you're at the beginning of your wellness journey or looking to deepen your understanding of health topics, ZeeCare is your go-to source for trusted health and wellness information.
          </p>
          {/* <p>Lorem ipsum dolor sit amet!</p>
          <p>Coding is fun!</p> */}
        </div>
      </div>
    </>
  );
};

export default Biography;
