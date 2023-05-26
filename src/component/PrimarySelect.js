const PrimarySelectM = ({ callback }) => {
    
    return (
      <>
      
        <select
          name=""
          id=""
          onChange={(e) => {
            callback(e.target.value);
          }}
        >
          <option value="" disabled selected>
            select
          </option>
          <option value="constant">constant</option>
          <option value="argument">argument</option>
          <option value="and">and</option>
          <option value="or">or</option>
        </select>
      </>
    );
  };


  export default PrimarySelectM