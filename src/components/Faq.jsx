const Faq = () => {
  return (
    <div className="mb-12">
      <h1 className="text-4xl font-bold text-center mb-10">{"FAQ's"}</h1>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          What is Crowdcube?
        </div>
        <div className="collapse-content">
          <p>
            We’re a personal crowdfunding website where you can raise money for
            anything that matters to you. From personal causes and projects to
            events and more.
            <br />
            As one of the first personal crowdfunding websites, our experience,
            support, and features will help ensure you raise the most money
            possible.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          What currencies can I raise money in?
        </div>
        <div className="collapse-content">
          <p>
            We’re a truly international website, supporting 23 currencies: U.S.
            <br />
            Dollar <br />
            British Pound <br />
            Canadian Dollar <br />
            Euro <br />
            Japanese Yen <br />
            Australian Dollar <br />
            New Zealand Dollar <br />
            Swiss Franc <br />
            Hong Kong Dollar <br />
            Singapore Dollar <br />
            Swedish Krona <br />
            Danish Krone <br />
            Polish Zloty <br />
            Norwegian Krone <br />
            Hungarian Forint <br />
            Czech Koruna <br />
            Israeli New Shekel <br />
            Mexican Peso <br />
            Philippine Peso <br />
            New Taiwan Dollar <br />
            Thai Baht <br />
            South African ZAR (conditions apply)
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          What makes Crowdcube different?
        </div>
        <div className="collapse-content">
          <p>
            We’re glad you asked! With the increasing number of crowdfunding
            sites out there, you need to know you’re dealing with a reputable
            and established website.
            <br />
            Crowdcube is proud to be one of the first major personal
            crowdfunding sites, having launched in 2011. Since then, we’ve
            helped people from all over the world raise millions online. Our
            unique platform is continually engineered to ensure our campaign
            owners raise the most money possible.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How can I contact you?
        </div>
        <div className="collapse-content">
          <p>
            Simply send us an email and we’ll get back to you as soon as
            possible – that’s normally under an hour. You can also find us on
            Facebook and follow us on Twitter to get our latest news and
            updates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
