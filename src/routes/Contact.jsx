 

const Contact = () => {
    return (
        <div >
           <div className="h-[220px] bg-purple-500 mt-6 text-center">
        <h1 className="pt-12 font-bold text-3xl text-white">Contact Us</h1>
        <p className="text-md text-white pt-4">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the <br /> coolest accessories, we have it all!
        </p>
      </div>
     <div className="grid justify-center mt-12">
     <div className="flex justify-center items-center md:w-[900px] md:h-[500px] text-center rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500">
        <div className="flex flex-col w-6/12 backdrop-blur-3xl bg-white/45 justify-center h-[300px] px-12 rounded-3xl">
        <p className="text-left">Name:</p>
        <input className="p-3 rounded-xl mt-2" type="text" name="Name" id="" placeholder="Your Name" /> <br />
        <p className="text-left -mt-2">Email:</p>
        <input className="p-3 rounded-xl mt-2" type="email" name="email" id="" placeholder="Your Email"/>
        <div>
        <button className=" mt-6 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-2 w-20 rounded-xl text-white " type="submit">Submit</button>
        </div>
        </div>
      </div>
     </div>
        </div>
    );
};

export default Contact;