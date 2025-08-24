export default function Dat() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Datenschutzerklärung</h1>
                
                <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                    <p className="text-gray-700 mb-6">
                        Mit dieser Datenschutzerklärung informieren wir Sie, welche Personendaten wir im Zusammenhang mit dieser Website bearbeiten. Personendaten sind alle Angaben, die sich auf eine bestimmte oder bestimmbare Person beziehen.
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Verantwortlicher</h2>
                    <div className="space-y-2 text-gray-700">
                        <div><strong>Name:</strong> Theodor Schneider</div>
                        <div><strong>Anschrift:</strong> Musterstraße 1, 8000 Zürich, Schweiz</div>
                        <div>
                            <strong>E-Mail:</strong> 
                            <a href="mailto:theodorstud@gmail.com" className="text-blue-600 hover:text-blue-800 ml-1">
                                theodorstud@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Erhebung und Bearbeitung von Personendaten</h2>
                    <p className="text-gray-700">
                        Wir bearbeiten Personendaten, die Sie uns freiwillig über das Kontaktformular oder per E-Mail mitteilen. Dazu gehören Name, E-Mail-Adresse und Ihre Nachricht. Diese Daten werden ausschliesslich zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hosting</h2>
                    <p className="text-gray-700">
                        Diese Website wird bei einem externen Hosting-Anbieter betrieben. Die beim Besuch der Website erfassten Daten werden auf den Servern des Hosters gespeichert. Der Hoster verarbeitet Personendaten nur im Rahmen der Leistungserbringung und gemäss unseren Weisungen.
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ihre Rechte</h2>
                    <p className="text-gray-700">
                        Sie haben das Recht, Auskunft über die zu Ihrer Person gespeicherten Daten zu erhalten, unrichtige Daten berichtigen zu lassen, die Löschung Ihrer Daten zu verlangen sowie die Bearbeitung Ihrer Daten einzuschränken oder zu widersprechen. Bitte wenden Sie sich dazu an die oben genannte Kontaktadresse.
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kontakt</h2>
                    <p className="text-gray-700 mb-4">Bei Fragen zum Datenschutz erreichen Sie uns unter:</p>
                    <div className="space-y-2 text-gray-700">
                        <div><strong>Name:</strong> Theodor Schneider</div>
                        <div>
                            <strong>E-Mail:</strong> 
                            <a href="mailto:theodorstud@gmail.com" className="text-blue-600 hover:text-blue-800 ml-1">
                                theodorstud@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-sm text-gray-500">
                        Diese Datenschutzerklärung basiert auf Empfehlungen von{' '}
                        <a href="https://www.cyon.ch/blog/anleitung-datenschutzerklaerung" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                            cyon.ch
                        </a>{' '}
                        und wurde für diese Website angepasst.
                    </p>
                </div>
            </div>
        </div>
    );
}