export const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] py-8 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-8 px-4">
        <div>
          <h5 className="mb-6 font-bold uppercase">About</h5>
          <ul className="space-y-4">
            <li>
              <a className="hover:underline" href="#">
                Partners
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                How-to
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Helpdesk
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Community
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="mb-6 font-bold uppercase">Terms & Conditions</h5>
          <ul className="space-y-3">
            <li>
              <a className="hover:underline" href="#">
                Report violations
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Policy
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Disclaimer
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="mb-6 font-bold uppercase">Our Office</h5>
          <address>
            <p>Jalan Rambu Raya Timur No. 18,</p>
            <p>Kota Administrasi, Jakarta Pusat.</p>
            <p>ZIP: 10000</p>
          </address>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4">
        <p className="text-center">2024 © PeersDepsTeams- Inter Hackaton.</p>
      </div>
    </footer>
  );
};
