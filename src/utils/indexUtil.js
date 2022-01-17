export default function deleteCall(calls, callID) {
   return calls.filter(c => c.id !== callID);
}