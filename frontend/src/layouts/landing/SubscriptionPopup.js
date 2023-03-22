import { useState } from 'react';

function SubscriptionPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
	setIsOpen(true);
  };

  const closePopup = () => {
	setIsOpen(false);
  };

  const createSubscription = () => {
	// Add code to create subscription
	console.log('Subscription created');
	closePopup();
  };

  return (
	<>
	  <button onClick={openPopup}>Open Popup</button>
	  {isOpen && (
		<div className="popup">
		  <h2>Create a Subscription</h2>
		  <p>Cost: $5/month</p>
		  <button onClick={createSubscription}>Proceed</button>
		  <button onClick={closePopup}>Cancel</button>
		</div>
	  )}
	</>
  );
}

export default SubscriptionPopup;
