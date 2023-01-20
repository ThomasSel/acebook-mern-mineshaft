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
                Acebook stores your information on every app and extention you
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
          </form>
        </div>
      </div>
    </>
  );
};

export default AboutText;
