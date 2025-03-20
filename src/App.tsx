import { 
  Dumbbell, 
  Clock, 
  Users, 
  ChevronRight,
  Mail,
  Phone,
  Instagram,
  CheckCircle2
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Dumbbell className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">Romane Coach</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#programs" className="text-gray-700 hover:text-blue-600">Programmes</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600">Prix</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600">Témoignages</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gray-900 h-screen">
        <div className="absolute inset-0">
          <img 
            className="w-full h-full object-cover opacity-50"
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Fitness Training"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Transforme ta vie</h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Nous sommes là pour répondre à vos objectifs de fitness avec notre suivi personnalisés et notre expertise. 
            Que vous soyez débutant ou confirmé, nous vous aideront en fonction de votre but à atteindre.
          </p>
          <div className="mt-10">
            <a href="#contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              Je me lance !
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Programmes d'entrainement</h2>
            <p className="mt-4 text-xl text-gray-600">Choisissez le programme qui vous correspond</p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Strength Training */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center">
                  <Dumbbell className="h-8 w-8 text-blue-600" />
                  <h3 className="ml-3 text-xl font-semibold text-gray-900">Force</h3>
                </div>
                <p className="mt-4 text-gray-600">Hypertrophie musculaire, gain de force, et améliorez votre condition physique générale grâce à notre programme complet de musculation.</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    Séances personnalisées
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    Correction sur la forme des exercices
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    Surcharge progressive
                  </li>
                </ul>
              </div>
            </div>

            {/* HIIT Training */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center">
                  <Clock className="h-8 w-8 text-blue-600" />
                  <h3 className="ml-3 text-xl font-semibold text-gray-900">HIIT Training</h3>
                </div>
                <p className="mt-4 text-gray-600">Maximisez la perte de graisse et améliorez votre condition cardiovasculaire grâce à un entraînement par intervalles à haute intensité.</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    Séances de 30 min
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    Focus sur la perte de graisses
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    Amélioration du cardio
                  </li>
                </ul>
              </div>
            </div>

            {/* Group Training */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center">
                  <Users className="h-8 w-8 text-blue-600" />
                  <h3 className="ml-3 text-xl font-semibold text-gray-900">Entrainements en groupe</h3>
                </div>
                <p className="mt-4 text-gray-600">Rejoignez nos séances de groupe motivantes pour une expérience d'entraînement amusante et efficace.</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    Motivation en équipe
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    Séances variées
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    De l'entraide pour atteindre vos objectifs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Tarifs</h2>
            <p className="mt-4 text-xl text-gray-600">Choissisez le tarifs qui vous correspond</p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Basic Plan */}
            <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">Basique</h3>
                <p className="mt-4 text-gray-600">Parfait pour commencer</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">€49</span>
                  <span className="text-base font-medium text-gray-500">/mois</span>
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    1 session par semaine
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    Séance basique
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    Support par mail
                  </li>
                </ul>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-blue-600 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">Pro</h3>
                <p className="mt-4 text-blue-200">Le choix le plus populaire</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-white">€99</span>
                  <span className="text-base font-medium text-blue-200">/mois</span>
                </p>
                <ul className="mt-6 space-y-4 text-white">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-white mr-2" />
                    2 sessions par semaine
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-white mr-2" />
                    Séances personnalisées
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-white mr-2" />
                    Conseils sur la nutrition
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-white mr-2" />
                    24/7 WhatsApp support
                  </li>
                </ul>
              </div>
            </div>

            {/* Elite Plan */}
            <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">Elite</h3>
                <p className="mt-4 text-gray-600">Pour les athlètes sérieux</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">$199</span>
                  <span className="text-base font-medium text-gray-500">/month</span>
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    4 sessions par week-end
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    Séances avancées personnalisées
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    Plan nutritionnel personnalisé
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    Support 24/7 prioritaire
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    Suivi de la progression chaque mois
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Ils ont parlé de nous</h2>
            <p className="mt-4 text-xl text-gray-600">Regardez ce que nos clients ont à dire</p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Sarah"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-bold">Sarah Johnson</h4>
                  <p className="text-gray-600">Perdu 9kg en 6 mois</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                "L'approche personnalisée et le soutien constant ont fait toute la différence. Je ne me suis jamais senti aussi bien!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Michael"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-bold">Michael Chen</h4>
                  <p className="text-gray-600">A gagné 6kg de muscle sec</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                "Le programme de musculation m'a aidé à obtenir des résultats que je n'aurais jamais cru possibles."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Emma"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-bold">Emma Davis</h4>
                  <p className="text-gray-600">Amélioration du chrono d'un marathon</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                "L'entraînement HIIT a considérablement amélioré mon endurance. Je cours maintenant mieux que jamais !"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Lancez-vous</h2>
            <p className="mt-4 text-xl text-gray-600">Prêt à démarrer votre aventure fitness ?</p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Information de contact</h3>
              <dl className="mt-8 space-y-6">
                <div className="flex">
                  <Phone className="h-6 w-6 text-blue-600" />
                  <dt className="ml-3">
                    <span className="text-base text-gray-900">Téléphone</span>
                    <dd className="mt-1">
                      <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-700">
                        (123) 456-7890
                      </a>
                    </dd>
                  </dt>
                </div>
                <div className="flex">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <dt className="ml-3">
                    <span className="text-base text-gray-900">Email</span>
                    <dd className="mt-1">
                      <a href="mailto:coach@fitcoachpro.com" className="text-blue-600 hover:text-blue-700">
                        coach@fitcoachpro.com
                      </a>
                    </dd>
                  </dt>
                </div>
                <div className="flex">
                  <Instagram className="h-6 w-6 text-blue-600" />
                  <dt className="ml-3">
                    <span className="text-base text-gray-900">Instagram</span>
                    <dd className="mt-1">
                      <a href="https://instagram.com/coaching_rg" className="text-blue-600 hover:text-blue-700">
                        @coaching_rg
                      </a>
                    </dd>
                  </dt>
                </div>
              </dl>
            </div>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nom
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Dumbbell className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold text-white">Romane Coach Pro</span>
            </div>
            <p className="text-gray-400">&copy; 2025 Romane Coach Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;