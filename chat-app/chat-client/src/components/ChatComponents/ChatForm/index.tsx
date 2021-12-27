/* Modules */
import { useFormik } from 'formik'; // Formik Hook

/* Context */
import { useMessage } from '../../../context/MessageContext'; // Context Custom Hook

/* Socket API */
import { sendMessage } from '../../../api/socketApi';

export default function Form({ username }: any) {
  const { messageList, setMessageList }: any = useMessage();

  const formik = useFormik({
    initialValues: {
      username,
      message: ""
    },

    onSubmit: values => {
      setMessageList([...messageList, values]);

      sendMessage(values); // Sending Message All Clients

      formik.resetForm(); // Reset Form
    }
  });

  return (
    <>
      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="input-group">
          <input name="message"
            placeholder="Message.."
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.message} />
          <button type="submit" className="btn btn-primary">Send</button>
        </div>
      </form>
    </>
  )
}
