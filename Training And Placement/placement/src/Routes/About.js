import "./About.css";

function About() {
  return (
    <div>
    <div className="container">
     <h1>About us</h1>
      <p>
      The University has the wherewithal to blend traditional, applied and action 
      learning to develop productivity citizens for a productive nation
      </p>
      <p>
        Need more information? <a href="/contact">Contact us</a>.
      </p>
     
      
      </div>
    <div className="box">
      <div className="boxes">
        <div>
          <h1>Learn The World</h1>
          <p>
            Lifelong learning is an extension of classrooms, books and theories.
            The DNA of Centurion is to offer ramps and ladders for multiple
            entry and exit by adopting and adapting National Credit Framework.
          </p>
        </div>

        <div>
          <h1>Experience The World</h1>
          <p>
            The appropriate balance of knowledge and skills is the key to making
            a real difference. Centurion learning labs are real-time market
            linked production hubs for immersive and competency linked education
            deliveries.
          </p>
        </div>

        <div>
          <h1>Change the World</h1>
          <p>
            The university and our students must transform societies and
            communities within which it exists – change begins with us and from
            within. The Centurion survives and thrives on disruptions and
            relevant innovations to co-create a holistic learning ecosystem.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
export default About;