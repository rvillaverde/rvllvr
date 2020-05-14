import React from 'react';
import Link from 'next/link';

// set up cookies
class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Main page</h2>
        <br></br>
        <Link href="/work">
          <a>Work</a>
        </Link>
        <br></br>
        <Link href="/admin">
          <a>Admin</a>
        </Link>
      </div >
    )
  }
}

export default Home;