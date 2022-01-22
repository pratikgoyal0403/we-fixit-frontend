import {useState} from 'react'
import { useDispatch } from 'react-redux';
import ElevatedButton from "../Commons/Elevated_button";
import Input from "../Commons/Input";
import {postReview} from '../../store/actions/appActions'

export default function CreateReview({id}) {
  const [review, setReview ] = useState('')
  const dispatch = useDispatch()
  const submitHandler = () => {
    console.log(id)
  }
  return (
    <div>
      <div>
        <textarea
          placeholder="Review"
          rows="5"
          className="w-full my-2 bg-gray-200 py-2 px-4 rounded focus:outline-none"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <ElevatedButton title="submit" click={submitHandler} />
      </div>
    </div>
  );
}
