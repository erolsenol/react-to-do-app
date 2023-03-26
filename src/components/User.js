import PropTypes from "prop-types";

function User({ isLogin, name, surName, age, adress, friends }) {
  return (
    <>
      <h1>
        {isLogin ? `Benim adım ${name} ${surName} ${age}` : "Giriş Yapınız"}
      </h1>

      <h3>
        {adress.title} {adress.zip}
      </h3>

      {friends.map((friend, index) => (
        <div key={index}>
          {index} - {friend.name}
        </div>
      ))}
    </>
  );
}

User.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  name: PropTypes.string,
  surName: PropTypes.string,
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  adress: PropTypes.shape({
    title: PropTypes.string,
    zip: PropTypes.number,
  }),
  friends: PropTypes.array,
};

User.defaultProps = {
  isLogin: false,
  name: "Noname",
};
export default User;
