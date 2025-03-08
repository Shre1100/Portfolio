import React from "react";
function  submitClick(){

}

function ContactForm(){

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "86d10c82-2571-4323-971a-53e9f06d976b");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };

    return(
        <div className="flex flex-col justify-center items-center w-[100%]">
            <form className="w-[100%]" onSubmit={onSubmit}>
                <div className="m-3 flex flex-col items-center mb-5">
                    <label className="text-white self-start ml-2 mb-1">Email:</label>
                    <input type="email" name="email" id="e-address" placeholder="Enter your email address" required className="w-[95%] h-[30px] rounded-lg p-3 outline-none"/>
                </div>
                <div className="m-3 flex flex-col items-center mb-5">
                    <label className="text-white self-start ml-2 mb-1">Message:</label>
                    <textarea name="message" id="msg" placeholder="Type your message here..." required className="w-[95%] h-[100px] rounded-xl p-3 outline-none resize-none"></textarea>
                </div>
                <button className="msg-button text-white bg-[#241f35] w-[30%] h-[38px] rounded-lg hover:bg-[#4f456f] hover:text-white  transition-shadow duration-300 cursor-pointer" onClick={submitClick}>
                    Send
                </button>
            </form>

        </div>
    );
}

export default ContactForm;