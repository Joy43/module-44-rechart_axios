import Price from "../Price/Price";


const PriceOption = () => {
  
        
           const PriceOptions=[
            
            {
              "id": 1,
              "name": "Basic Membership",
              "price": "$29.99 per month",
              "features": [
                "Access to cardio equipment",
                "Limited access to group fitness classes",
                "Locker room access",
                "Discounts on gym merchandise",
                "Monthly fitness assessment"
              ]
            },
            {
              "id": 2,
              "name": "Premium Membership",
              "price": "$49.99 per month",
              "features": [
                "Full access to all gym facilities",
                "Unlimited group fitness classes",
                "Personal trainer consultation",
                "Access to sauna and spa",
                "Towel service",
                "Discounts on personal training sessions"
              ]
            },
            {
              "id": 3,
              "name": "Student Membership",
              "price": "$19.99 per month",
              "features": [
                "Valid student ID required",
                "Access during non-peak hours",
                "Access to cardio and weightlifting areas",
                "Online workout tracking",
                "Access to online fitness classes"
              ]
            }
           ]
            
          
          
   
    return (
        <div className="w-80 grid">
            <h2 className="text-5xl">Best price</h2>  
          {
            PriceOptions.map(option=> <Price key={option.id} option={option}></Price> )
          }
        </div>
    );
};

export default PriceOption;