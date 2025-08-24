export default function Imp() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Impressum</h1>
                
                <div className="bg-white rounded-lg shadow-sm p-8">
                    <div className="space-y-4 text-gray-700">
                        <div>
                            <strong className="text-gray-900">Name:</strong> Theodor Schneider
                        </div>
                        <div>
                            <strong className="text-gray-900">Anschrift:</strong> Musterstraße 1, 8000 Zürich, Schweiz
                        </div>
                        <div>
                            <strong className="text-gray-900">E-Mail:</strong> 
                            <a href="mailto:theodorstud@gmail.com" className="text-blue-600 hover:text-blue-800 ml-1">
                                theodorstud@gmail.com
                            </a>
                        </div>
                        <div>
                            <strong className="text-gray-900">Telefon:</strong> 
                            <a href="tel:+41765757671" className="text-blue-600 hover:text-blue-800 ml-1">
                                +41 76 575 76 71
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}