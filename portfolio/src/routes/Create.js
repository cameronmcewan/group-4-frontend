import React from 'react';
import CreateForm from '../components/CreateForm';
import DropDown from '../components/DropDown';

const Create = () => {
  return (
    <>
    <section>
      <header className='block center'>
        <div>
          <h1>Create a new portfolio coin</h1>
        </div>
      </header>
      <div className='row'>
        <h4 className='block col-2'>Your new coin:</h4>
        <h4 className='block col-1'>
        Add crypto tokens to your coin:
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam modi laudantium autem adipisci quibusdam provident consequatur, ab porro? Deserunt nam distinctio nesciunt quia quibusdam obcaecati, excepturi ea magnam enim minus. Dolore voluptas excepturi modi. Iste quia consequuntur maxime beatae est!
        <CreateForm />
        <DropDown />
        </h4>
      </div>

    </section><section>
        <h1>Another section</h1>
        <h2>Space</h2>
    </section>
    </>

  )
}

export default Create