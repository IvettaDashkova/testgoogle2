export const App = () => {
  const apiKey = process.env.REACT_APP_APIKey
  console.log('apiKey', apiKey);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework templateeee
    </div>
  );
};
