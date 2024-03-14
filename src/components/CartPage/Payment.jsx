const Payment = () => {
  return (
    <div className="flex flex-col items-start justify-center gap-3 p-7 mx-10 my-10 border bg-[#E2E4EB33] bg-opacity-20">
      <p className="text-left text-xl font-medium">PAY WITH</p>
      <img
        src="/payment_options.svg"
        alt="options"
        className="w-[90%] h-auto"
      />
    </div>
  );
};

export default Payment;
