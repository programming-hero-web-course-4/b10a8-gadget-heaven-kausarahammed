const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="text-center pt-24 pb-8 container mx-auto z-30">
        <h2 className="font-bold text-3xl mb-3">Gadget Heaven</h2>
        <p className="font-medium text-md mb-8">
          Leading the way in cutting-edge technology and innovation.
        </p>
        <hr />
      </div>
      <div className="grid grid-cols-3 px-24 gap-4 text-center lg:px-72">
        <div className="flex flex-col">
          <h6 className="font-bold text-lg">Services</h6>
          <a className="text-gray-400">Product Support</a>
          <a  className="text-gray-400">Order Tracking</a>
          <a  className="text-gray-400">Shipping & Delivery</a>
          <a  className="text-gray-400">Returns</a>
        </div>
        <div className="flex flex-col">
          <h6 className="font-bold text-lg">Services</h6>
          <a  className="text-gray-400">About Us</a>
          <a  className="text-gray-400">Careers</a>
          <a  className="text-gray-400">Contact</a>
        </div>
        <div className="flex flex-col">
          <h6 className="font-bold text-lg">Services</h6>
          <a  className="text-gray-400">Terms of Service</a>
          <a  className="text-gray-400">Privacy Policy</a>
          <a  className="text-gray-400">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
