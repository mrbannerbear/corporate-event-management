const ContactUs = () => {
  return (
    <>
      <div
        className="hero min-h-[70vh] bg-top bg-fixed"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/qMtCXRt/dean-machala-DLDOAs-D5fcw-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay backdrop-blur-[1.5px]"></div>
        <div className="hero-content text-center text-neutral-content py-12">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold">We are excited to work with you</h1>
            <p className="mb-5">
              Contact us for the best corporate experience you can have, <br /> as we look forward to having an amazing journey with you!
            </p>
            <button className="border-[1.5px] px-3 py-1">Contact Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
