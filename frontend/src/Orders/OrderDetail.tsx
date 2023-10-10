import data from "./data"; // data imported from a file in the same directory
import { useParams } from "react-router-dom"; // A React Router hook for grabbing parameters from the URL

// functional React component OrderDetail
function OrderDetail() {

  /*
  the useParams hook is used to extract the id 
  from the URL. The id is expected to be a string
  */
  const { id } = useParams<{ id: string }>();

  /*
  The find method looks through data.orders 
  to find an order where the _id matches the id 
  from the URL (after parsing it to an integer)
  */
  const order = data.orders.find((o) => o._id === parseInt(id as string)); 

  /*
  If an order is found (order? checks if order is not null), 
  display the name of the user who made that order
  */
  return (
    <div>
      <h3>order name: {order?.user.name}</h3>
    </div>
  );
}

export default OrderDetail;

