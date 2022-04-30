import QuoteForm from "../components/quotes/QuoteForm";
const NewQuote = () => {
  const addQuote = (quoteData) => {
    console.log(quoteData);
  };
  return (
    <div>
      <QuoteForm onAddQuote={addQuote} />
    </div>
  );
};

export default NewQuote;
