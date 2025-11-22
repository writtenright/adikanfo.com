export default function Footer(){
  return (
    <footer className="bg-cocoa text-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div>
            <h3 className="font-bold text-lg">Adikanfo Commodities Ltd</h3>
            <p className="text-sm">Licensed cocoa buying company in Ghana.</p>
            <p className="text-sm mt-2">Address: [Insert office address]</p>
            <p className="text-sm">Phone: +233 24 000 0000 | Email: info@adikanfoghana.com</p>
          </div>
          <div className="mt-6 md:mt-0">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="text-sm mt-2">
              <li>About</li>
              <li>Operations</li>
              <li>For Farmers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-xs opacity-90">
          © {new Date().getFullYear()} Adikanfo Commodities Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
