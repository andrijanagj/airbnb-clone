import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold"> ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold"> HOST</h5>
        <p>Hotel Star</p>
        <p>Try hostings</p>
        <p>Top Host</p>
        <p>Explore hosting resources </p>
        <p> How to host responsibly</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold"> COMMUNITY</h5>
        <p>Combating discrimination</p>
        <p>Support Afghan refugees</p>
        <p>Celebrating diversity & belonging</p>
        <p>Airbnb.org: disaster relief housing</p>
        <p>Include everyone</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold"> SUPPORT</h5>
        <p>Help Center</p>
        <p>Our COVID-19 Response</p>
        <p>Supporting people with disabilities</p>
        <p>Safety information</p>
        <p>Cancellation options</p>
      </div>

      <div></div>
    </div>
  );
}

export default Footer;
