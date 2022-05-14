
const AboutUs = () => {


  return (
    <div style={styles.container}>
      <h1 className="text-sky-400 text-5xl pb-3 text-center underline pb-3">About Us</h1>
    </div>
  )
}

  const styles = {
    container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
    order: {  marginBottom: 15 },
    input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
    orderName: { fontSize: 20, fontWeight: 'bold' },
    orderDescription: { marginBottom: 0 },
    button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
  }

export default AboutUs  
