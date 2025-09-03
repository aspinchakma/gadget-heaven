const Footer = () => {
  return (
    <div className="text-center text-[#6b6b6f] lg:py-[40px] py-[20px] w-[90%] lg:w-[80%] mx-auto">
      <h3 className="text-black font-bold text-[32px] my-3">Gadget Heaven</h3>
      <p>Leading the way in cutting-edge technology and innovation.</p>
      <div className="bg-[#e6e6e7] h-[1px] my-[22px]"></div>
      <div className="flex justify-center lg:gap-[166px] gap-8 lg:flex-row flex-col">
        <div className="leading-[25px]">
          <h3 className="font-bold text-[18px] text-black">Services</h3>
          <p>Product Support</p>
          <p>Order Tracking</p>
          <p>Shipping & Delivery</p>
          <p>Returns</p>
        </div>
        <div className="leading-[25px]">
          <h3 className="font-bold text-[18px] text-black">Company</h3>
          <p>About Us</p>
          <p>Carrers</p>
          <p>Contact</p>
        </div>
        <div className="leading-[25px]">
          <h3 className="font-bold text-[18px] text-black">Legal</h3>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
