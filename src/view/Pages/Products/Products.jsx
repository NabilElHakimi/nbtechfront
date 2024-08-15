import Card from '../Home/components/card';

const cardCount = 50; 

  const renderCards = () => {
    return Array.from({ length: cardCount }, (_, index) => <Card key={index} />);
  };

export default function Products() 
{
    return (       

        <div className="flex justify-between">
      <div className="w-[20%] p-4 bg-gray-100">
        <div className="sticky top-0">
          <h1 className="text-2xl font-bold mb-4">Categories</h1>
          <ul className="mb-4">
            {['Category 1', 'Category 2', 'Category 3', 'Category 4'].map((category, index) => (
              <li key={index} className="mb-2 flex items-center">
                <input type="checkbox" id={`category-${index}`} className="mr-2" />
                <label htmlFor={`category-${index}`}>{category}</label>
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold mb-2">Price Range</h2>
          <select className="w-full p-2 border rounded">
            <option value="">Select a price range</option>
            <option value="0-50">$0 - $50</option>
            <option value="50-100">$50 - $100</option>
            <option value="100-200">$100 - $200</option>
            <option value="200+">$200+</option>
          </select>
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {renderCards()}
        </div>
      </div>
    </div>
    );
}



