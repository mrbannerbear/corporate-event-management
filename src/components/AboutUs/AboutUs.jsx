/* eslint-disable react/no-unescaped-entities */
import Navbar from "../home/navbar/Navbar";

const AboutUs = () => {
  return (
    <>
      <div
        className="hero min-h-screen place-items-start -z-10 bg-fixed"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/R9TjMzS/kevin-gonzalez-NXNa-E9lu6w-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 px-24 py-6"></div>
        <div className="z-30 w-full p-6 lg:py-8">
          <Navbar></Navbar>
        </div>

        <div className="hero-content text-center text-neutral-content z-20 mt-28 lg:mt-44 lg:ml-12 lg:px-24 lg:py-12 p-8">
          <div className="max-w-4xl mx-auto">
            <p className="mb-5">
              <p className="min-h-[50vh] mt-12 static">
                <h1 className="text-4xl font-bold my-5">
                  About Us: Crafting Extraordinary Corporate Experiences
                </h1>
                At Nexus Gatherings, we believe that every corporate event is an
                opportunity to make a profound impact. Our journey began with a
                vision to redefine the way businesses approach gatherings and
                celebrations. With a mission to empower our clients through
                exceptional event management, we've grown to become industry
                leaders.
              </p>

              <p className="min-h-[50vh] mt-12 static">
                <h1 className="text-4xl font-bold my-5">Our Story</h1>
                Our story is a testament to our commitment to excellence. It
                started with a small team of passionate event enthusiasts who
                shared a common belief - that corporate events should be more
                than just meetings; they should be transformative experiences.
                What began as a humble endeavor has evolved into a company known
                for its dedication to creating unforgettable moments.
              </p>

              <p className="min-h-[50vh] mt-12 static">
                <h1 className="text-4xl font-bold my-5">
                  Tailored Experiences
                </h1>
                We understand that every corporate event is unique. That's why
                we approach each project with a fresh perspective and a
                commitment to tailoring our services to your specific needs.
                Whether you're organizing a high-profile conference, a
                team-building workshop, or a product launch, we take the time to
                understand your audience and your message, ensuring that every
                detail is aligned with your goals.
              </p>

              <p className="min-h-[50vh] mt-12 static">
                <h1 className="text-4xl font-bold my-5">Our Craft for You</h1>
                Your success is a driving force. We take pride in the pivotal
                role we play in helping businesses thrive through exceptional
                events. From conceptualization to execution, we handle every
                aspect with precision and care. Our team of experts is dedicated
                to making your vision a reality, allowing you to focus on what
                matters most - achieving your objectives and strengthening your
                brand.
              </p>

              <p className="min-h-[50vh] mt-12 static">
                <h1 className="text-4xl font-bold my-5">
                  Elevating Connections
                </h1>
                Our events are designed not only to meet your business
                objectives but also to foster meaningful connections. We believe
                that relationships built at our gatherings can be a catalyst for
                future success. Whether it's networking opportunities at a trade
                show or team bonding at a workshop, we create environments where
                connections flourish.
              </p>

              <p className="min-h-[50vh] mt-12 static">
                <h1 className="text-4xl font-bold my-5">
                  Join Us in Our Journey
                </h1>
                We invite you to join us on this journey of crafting
                extraordinary corporate experiences. Let's collaborate to turn
                your events into impactful moments that resonate with your
                audience and leave a lasting legacy. Together, we'll create
                memories that inspire, connect, and drive success.
              </p>

              <p className="min-h-[50vh] mt-12 static">
                <h1 className="text-4xl font-bold my-5">Contact Us Today</h1>
                <p className="flex flex-col">
                  <p>
                    Ready to explore the possibilities? Reach out to us today
                    and discover how Nexus Gatherings can transform your
                    corporate events into remarkable experiences. We look
                    forward to partnering with you on your next event and
                    beyond.
                  </p>

                  <button className="border-white border-[1.5px] px-3 py-1 rounded-sm w-1/6 mx-auto mt-3">
                    Contact Us
                  </button>
                </p>
              </p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
