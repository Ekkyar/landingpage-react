// Images
import Illustration1 from "./assets/Illustration_1.png";
import Illustration2 from "./assets/Illustration_2.png";

// Icons
import IconLaslesVpn from "./assets/Logo.png";
import User from "./assets/User.png";
import Location from "./assets/Location.png";
import Server from "./assets/Server.png";
import Checklist from "./assets/icon-checklist.png";
import Plan from "./assets/Plan.png";
import CheckSuccess from "./assets/Check_Success.png";

function App() {
  // Isi menu
  const menus = ["About", "Features", "Pricing", "Testimonials", "Help"];

  // Isi Card Info
  const cardInfo = [
    {
      icons: User,
      label: "Users",
      total: "90+",
    },
    {
      icons: Location,
      label: "Locations",
      total: "30+",
    },
    {
      icons: Server,
      label: "Servers",
      total: "50+",
    },
  ];

  // Isi Features
  const features = [
    "Powerfull online protection.",
    "Internet without borders.",
    "Supercharged VPN",
    "No specific time limits.",
  ];

  // Isi Plan
  const plans = [
    {
      title: "Free Plan",
      features: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
      ],
      price: "Free",
    },
    {
      title: "Standart Plan",
      features: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "Yes Traffic Logs",
        "Works on All Devices",
        "Connect Anyware",
      ],
      price: "$9 / mo",
    },
    {
      title: "Premium Plan",
      features: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "Yes Traffic Logs",
        "Works on All Devices",
        "Connect Anyware",
        "Get New Features",
      ],
      price: "$12 / mo",
    },
  ];

  return (
    <>
      {/* Navbar Start */}
      <header className="container max-w-5xl mx-auto pt-12 flex flex-row items-center space-x-36">
        {/* Logo */}
        <img src={IconLaslesVpn} alt="icon-laslesVpn" className="w-36" />

        {/* Menu */}
        <div className="flex-1">
          <ul className="flex flex-row space-x-6">
            {menus.map((val, index) => (
              <li key={index}>{val}</li>
            ))}
          </ul>
        </div>

        {/* Button */}
        <div className="flex flex-row items-center space-x-6">
          <button className="font-bold">Sign In</button>
          <button className="rounded-full border border-red-500 py-3 px-6">
            Sign Up
          </button>
        </div>
      </header>
      {/* Navbar End */}

      {/* Jumbotron Start */}
      <main className="container max-w-5xl mx-auto grid grid-cols-2 py-24">
        {/* Description */}
        <div>
          <h1 className="font-bold text-4xl mb-5">
            Want anything to be ease <br /> with LaselsVPN.
          </h1>
          <p className="font-normal text-xs mb-12">
            Provide a network for all your needs with ease and fun using
            LaslesVPN discover interesting features from us.
          </p>
          <button className="py-4 px-16 bg-red-500 rounded-md text-white drop-shadow-3xl">
            Get Started
          </button>
        </div>

        {/* Image */}
        <img src={Illustration1} alt="illustration-laslesvpn" />
      </main>
      {/* Jumbotron End */}

      {/* Card Info Start */}
      <section className="container max-w-5xl mx-auto">
        <div className="grid grid-cols-3 shadow-2xl rounded-xl py-7">
          {cardInfo.map((val, index) => {
            return (
              <div
                key={index}
                className={`flex flex-row justify-center py-7 space-x-6 ${
                  index + 1 !== cardInfo.length && "border-r border-slate-200"
                }`}
              >
                <div className="flex flex-row">
                  <div className="rounded-full mr-5">
                    <img
                      src={val.icons}
                      alt={val.label}
                      className="w-14 h-14"
                    />
                  </div>
                  <div>
                    <div>{val.total}</div>
                    <div>{val.label}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* Card Info Start */}

      {/* Features Start */}
      <section className="container max-w-5xl mx-auto py-24">
        <div className="grid grid-cols-2 items-center">
          <img src={Illustration2} alt="features-laslesvpn" />
          <div className="px-16 space-y-4">
            <h2 className="font-medium text-3xl">
              We Provide Many Features You Can Use
            </h2>
            <p className="font-normal text-sm">
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </p>
            {features.map((val, index) => {
              return (
                <div className="flex items-center space-x-3" key={index}>
                  <img src={Checklist} alt="icon-check" className="w-6 h-6" />
                  <div className="text-xs">{val}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Features End */}

      {/* Card Plan Start */}
      <section className=" bg-slate-50">
        <div className=" container max-w-5xl mx-auto py-24">
          {/* Header*/}
          <div className="flex flex-col items-center">
            <h2 className="font-medium text-4xl leading-10 mb-5">
              Choose Your Plan
            </h2>
            <p className="font-normal text-sm leading-7 max-w-sm text-center mb-14">
              Let's choose the package that is best for you and explore it
              happily and cheerfully.
            </p>
          </div>
          {/* plan */}
          <div className="grid grid-cols-3 space-x-6">
            {plans.map((val, key) => {
              return <CardPlan key={key} {...val} />;
            })}
          </div>
        </div>
      </section>
      {/* Card Plan End */}
    </>
  );
}

// Card Plan
function CardPlan({ title, price, features }) {
  return (
    <div className="bg-white border border-slate rounded-lg flex flex-col items-center justify-between hover:border-red-500 transition duration-300 pt-16 pb-8">
      <div className="space-y-5 flex flex-col items-center justify-center">
        <img src={Plan} alt="icon-plan" className="w-24" />
        <h3>{title}</h3>
        <div className="space-y-2">
          {features.map((val, index) => {
            return (
              <div key={index} className="flex mr-2 items-center space-x-2">
                <img
                  src={CheckSuccess}
                  alt="check-success"
                  className="w-3 h-2"
                />
                <div>{val}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8">
        <div className="text-center font-medium mb-3">{price}</div>
        <button className="border rounded-full py-2 px-10 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition font-medium">
          Select
        </button>
      </div>
    </div>
  );
}

export default App;
