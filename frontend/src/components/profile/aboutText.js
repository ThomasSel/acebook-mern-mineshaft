import UserProfile from "./userProfile";

const AboutText = (props) => {
  return (
    <>
      <div className="bg-grey-lighter h-screen font-sans">
        <div className="container mx-auto h-full flex justify-center items-center">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="font-lobster text-blue-500 text-center text-3xl mb-12">
              Data policy
            </h2>
            <div className="text-center">
              <p>
                Mineshaft stores your information on every app and extention you
                use.
              </p>
              <p>
                We know how often you use them, where you use them, and who you
                use them to interact with.
              </p>
              <p>
                That means we know who you talk to on Instagram, what countries
                you are speaking with,
              </p>
              <p>
                your relationship status, probably weight, if you're going to be
                a parent soon
              </p>
              <p>and what time you go to sleep!</p>
              <p>Sleep tight xoxo</p>
              <br></br>
              <p>- The team at Mineshaft.</p>
            </div>
            <div className="text-center bt-10">
              <p>Change policy </p>
              <a
                className="center font-bold text-sm text-blue-500 hover:text-blue-800"
                href="https://www.change.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
            </div>
          </form>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default AboutText;
