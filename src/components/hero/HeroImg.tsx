import React, { useState, useEffect } from "react";
import {
  Building2,
  Package,
  Briefcase,
  Calculator,
  CircleDollarSign,
  Users,
  X,
} from "lucide-react";

const deals = [
  {
    status: "Active",
    companyName: "Commercial Window Washing",
    location: "Miami, FL",
    brokerName: "Sam Smith",
    brokerCompany: "Transworld Business Brokers",
    tags: ["B2B Services", "YIB: 15", "Employees: 10", "Non-Franchise"],
    revenue: "$1.2M",
    earnings: "$750k",
    margin: "20%",
    askingPrice: "4.5x",
    feedbackMessage: "Location outside desired area",
    route: "Reject",
    score: 0,
  },
  {
    status: "Active",
    companyName: "Mountain View Auto Repair",
    location: "Denver, CO",
    brokerName: "Janet Wilson",
    brokerCompany: "Rocky Mountain Business Sales",
    tags: ["Automotive", "YIB: 8", "Employees: 6", "Real Estate Included"],
    revenue: "$1.2M",
    earnings: "$425k",
    margin: "35%",
    askingPrice: "3.8x",
    feedbackMessage: "Strong match with criteria",
    route: "Match",
    score: 8,
  },
  {
    status: "To Review",
    companyName: "Artisan Bakery Plus",
    location: "Portland, OR",
    brokerName: "Michael Chang",
    brokerCompany: "Pacific Northwest Brokers",
    tags: ["Food & Beverage", "YIB: 5", "Employees: 12", "B2C"],
    revenue: "$1.2M",
    earnings: "$380k",
    margin: "28%",
    askingPrice: "3.2x",
    feedbackMessage: "Industry not in search criteria",
    route: "Reject",
    score: 3,
  },
  {
    status: "To Review",
    companyName: "Tech Solutions Group",
    location: "Austin, TX",
    brokerName: "David Martinez",
    brokerCompany: "Texas Business Exchange",
    tags: ["IT Services", "YIB: 3", "Employees: 15", "SaaS Component"],
    revenue: "$1.2M",
    earnings: "$1.2M",
    margin: "42%",
    askingPrice: "5.5x",
    feedbackMessage: "Excellent profit margins",
    route: "Match",
    score: 9,
  },
  {
    status: "To Review",
    companyName: "Precision Manufacturing Co",
    location: "Cleveland, OH",
    brokerName: "Sarah Johnson",
    brokerCompany: "Industrial Sales Partners",
    tags: ["Manufacturing", "YIB: 25", "Employees: 45", "ISO Certified"],
    revenue: "$1.2M",
    earnings: "$2.8M",
    margin: "18%",
    askingPrice: "4.2x",
    feedbackMessage: "Company size exceeds criteria",
    route: "Reject",
    score: 4,
  },
  {
    status: "Active",
    companyName: "Green Valley Landscaping",
    location: "Sacramento, CA",
    brokerName: "Tom Anderson",
    brokerCompany: "West Coast Business Brokers",
    tags: ["Home Services", "YIB: 12", "Employees: 8", "Recurring Revenue"],
    revenue: "$1.2M",
    earnings: "$560k",
    margin: "32%",
    askingPrice: "3.9x",
    feedbackMessage: "Strong recurring revenue model",
    route: "Match",
    score: 7,
  },
];

const HeroImg = () => {
  const icons = [
    Building2,
    Package,
    Briefcase,
    Calculator,
    CircleDollarSign,
    Users,
  ];
  const [currentDeal, setCurrentDeal] = useState(0);
  const [cardPosition, setCardPosition] = useState("entering"); // entering, processing, exiting-right, exiting-down
  const [animate, setAnimate] = useState({
    name: false,
    broker: false,
    location: false,
    action: false,
    metrics: false,
    tags: false,
    feedback: false,
  });

  useEffect(() => {
    const timers = [
      // Start with empty card entering from top
      setTimeout(() => setCardPosition("processing"), 1000),
      // Begin showing content
      setTimeout(() => setAnimate((prev) => ({ ...prev, name: true })), 1000),
      setTimeout(() => setAnimate((prev) => ({ ...prev, broker: true })), 2000),
      setTimeout(
        () => setAnimate((prev) => ({ ...prev, location: true })),
        2500
      ),
        setTimeout(() => setAnimate((prev) => ({ ...prev, action: true })), 3500),
      setTimeout(
        () => setAnimate((prev) => ({ ...prev, metrics: true })),
        4000
      ),
      setTimeout(() => setAnimate((prev) => ({ ...prev, tags: true })), 4500),
      setTimeout(
        () => setAnimate((prev) => ({ ...prev, feedback: true })),
        5500
      ),
      // Handle card exit
      setTimeout(() => {
        if (deals[currentDeal].route === "Match") {
          setCardPosition("exiting-down");
        } else {
          setCardPosition("exiting-right");
        }
      }, 7500),
      // Reset for next card
      setTimeout(() => {
        setCurrentDeal((prev) => (prev + 1) % deals.length);
        setAnimate({
          name: false,
          broker: false,
          location: false,
            action: false,
          metrics: false,
          tags: false,
          feedback: false,
        });
        setCardPosition("entering");
      }, 10000),
    ];

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [currentDeal]);

  return (
    <div className="flex flex-col items-center w-full max-w-[100%] mx-auto p-4">
      {" "}
      {/* reduced max-w and padding */}
      <div
        style={{
          height: "170px",
          position: "relative",
        }}
        className=" w-[150%]"
      >
        {/* Funnel Shape */}
        <div
          style={{
            position: "absolute",
            inset: 0,

            clipPath: "polygon(0% 0%, 100% 0%, 75% 100%, 25% 100%)",
          }}
          className="z-20  bg-gradient-to-b from-white/5 to-gray-300 shadow-lg"
        >
          {/* Top Row Icons */}
          <div
            style={{
              position: "absolute",
              top: "15px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
            className="gap-[30px] mq800:gap-[20px] mq450:gap-[15px]"
          >
            {icons.map((Icon, index) => (
              <div
                key={`top-${index}`}
                style={{
                  borderRadius: "50%",
                  backgroundColor: "white",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="h-[48px] w-[48px] mq450:h-[40px] mq450:w-[40px]"
              >
                <Icon
                  size={24}
                  color="#26A96C"
                  className="mq450:hidden block"
                />
                <Icon
                  size={18}
                  color="#26A96C"
                  className="mq450:block hidden"
                />
              </div>
            ))}
          </div>

          {/* Bottom Row Icons */}
          <div
            style={{
              position: "absolute",
              top: "100px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
            className="gap-[30px] mq800:gap-[20px] mq450:gap-[15px]"
          >
            {icons.slice(0, 4).map((Icon, index) => (
              <div
                key={`mid-${index}`}
                style={{
                  borderRadius: "50%",
                  backgroundColor: "white",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="h-[48px] w-[48px] mq450:h-[40px] mq450:w-[40px]"
              >
                <Icon
                  size={24}
                  color="#26A96C"
                  className="mq450:hidden block"
                />
                <Icon
                  size={18}
                  color="#26A96C"
                  className="mq450:block hidden"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative w-full bg-oxford-blue rounded-lg p-3 mq1125:p-4 border-2  shadow-lg">
        {" "}
        {/* reduced padding and border */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-300 to-gray-600 z-10 rounded-lg " />
        <div
          className={`relative bg-white z-30 rounded-lg p-3 mq1125:p-4 transition-all duration-500 transform
          ${cardPosition === "entering" ? "-translate-y-full opacity-0" : ""}
          ${cardPosition === "processing" ? "translate-y-0 opacity-100" : ""}
          ${
            cardPosition === "exiting-right" ? "translate-x-full opacity-0" : ""
          }
          ${
            cardPosition === "exiting-down" ? "translate-y-full opacity-0" : ""
          }`}
        >
          <div className="absolute top-2 right-2">
            {" "}
            {/* reduced spacing */}
            <div className="animate-spin rounded-full h-3 w-3 mq1125:h-4 mq1125:w-4 border-b-2 border-green-500" />{" "}
            {/* smaller spinner */}
          </div>

          <div
            className={`transition-opacity duration-500 ${
              animate.name ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex mq750:flex-col mq750:items-start justify-between items-center space-y-4 sm:space-y-0 mb-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-[#26A96C]/10 text-[#26A96C] text-xs rounded-full">
                    {deals[currentDeal].status}
                  </span>
                  <span className="bg-[#F9F4F0] text-[#03012C] text-xs px-2 py-1 rounded-full">
                    Score: {deals[currentDeal].score}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-[#03012C]">
                  {deals[currentDeal].companyName}
                </h3>
                <div className={`flex items-center text-xs text-[#3B6064] mt-1 transition-opacity duration-500 ${
              animate.location ? "opacity-100" : "opacity-0"
            }`}>
                  <Building2 className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span className="truncate">
                    {deals[currentDeal].location} •{" "}
                    {deals[currentDeal].brokerName}
                  </span>
                </div>
              </div>
              <div className={`w-[40%] flex items-center justify-end mq750:w-full transition-opacity duration-500  ${
              animate.action ? "opacity-100" : "opacity-0"
            }`}>
                <button className="flex-1 sm:flex-none px-4 py-2 max-w-[60%] mq750:max-w-[100%] bg-[#26A96C] text-white rounded-lg hover:bg-[#26A96C]/90">
                  Request
                </button>

                <X className="w-10 h-6 text-red-600" />
              </div>
            </div>
          </div>
          <div
            className={`grid grid-cols-4 gap-1 my-1.5 transition-opacity duration-500 ${
              animate.metrics ? "opacity-100" : "opacity-0"
            }`}
          >
            {" "}
            {/* reduced gap and margin */}
            <div>
              <p className="font-semibold text-[10px]">Revenue</p>{" "}
              {/* smaller text */}
              <p className="text-xs">{deals[currentDeal].revenue}</p>{" "}
              {/* smaller text */}
            </div>
            <div>
              <p className="font-semibold text-[10px]">Earnings</p>{" "}
              {/* smaller text */}
              <p className="text-xs">{deals[currentDeal].earnings}</p>{" "}
              {/* smaller text */}
            </div>
            <div>
              <p className="font-semibold text-[10px]">Margin</p>
              <p className="text-xs">{deals[currentDeal].margin}</p>
            </div>
            <div>
              <p className="font-semibold text-[10px]">Asking Price</p>
              <p className="text-xs">{deals[currentDeal].askingPrice}</p>
            </div>
          </div>

          <div
            className={`flex flex-wrap gap-1 transition-opacity duration-500 ${
              animate.tags ? "opacity-100" : "opacity-0"
            }`}
          >
            {" "}
            {/* reduced gap */}
            {deals[currentDeal].tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-0.5 bg-gray-100 rounded-full text-xs"
              >
                {" "}
                {/* smaller padding and text */}
                {tag}
              </span>
            ))}
          </div>

          <div
            className={`mt-2 transition-opacity duration-500 ${
              animate.feedback ? "opacity-100" : "opacity-0"
            }`}
          >
            {" "}
            {/* reduced margin */}
            <p
              className={`text-xs ${
                deals[currentDeal].route === "Match"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {" "}
              {/* smaller text */}
              {deals[currentDeal].feedbackMessage}
            </p>
          </div>
        </div>
        <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-2 h-12 bg-red-500 rounded-r" />{" "}
        {/* smaller reject portal */}
      </div>
    </div>
  );
};

export default HeroImg;
