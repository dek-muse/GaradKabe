import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsDribbble, BsTelegram } from 'react-icons/bs';
import logo from '../assets/logo.png';
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5 '>
          <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
          <img src={logo} alt="logo" className='w-[70px]'/>
        </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Maan-hage
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://www.facebook.com/profile.php?id=100076266803616 '
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Facebook
                </Footer.Link>
                <Footer.Link
                  href='https://t.me/AqlizameH'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Telegram
                </Footer.Link>
                {/* <Footer.Link href='#'>Instagram</Footer.Link> */}
              </Footer.LinkGroup>
            </div>
            {/* <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div> */}
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="Maan-hage"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='https://www.facebook.com/profile.php?id=100076266803616 ' icon={BsFacebook}/>
            <Footer.Icon href='https://t.me/AqlizameH' icon={BsTelegram}/>
            {/* <Footer.Icon href='#' icon={BsTwitter}/>
            <Footer.Icon href='#' icon={BsDribbble}/> */}

          </div>
        </div>
      </div>
    </Footer>
  );
}
