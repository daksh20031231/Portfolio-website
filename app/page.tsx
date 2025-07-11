import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Calendar,
  MapPin,
  ExternalLink,
  Award,
  CheckCircle,
  Instagram,
} from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-start gap-8 mb-24">
          <div className="flex-1">
            <h1 className="text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
              Hello, I am Daksh Sharma
            </h1>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              🚀B.Tech CSE - Cyber Security student. I work on finding
              vulnerabilities and securing the organisations.
            </p>
            <Link
              href="https://drive.google.com/file/d/1s69zVc1oGpRfA602m6A7KINOaH_H2mH0/view?usp=sharing"
              className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
            >
              View Resume ⤴
            </Link>
          </div>
          <div className="lg:w-64">
            <Image
              src="/IMG_0710.jpeg?height=100&width=100"
              alt="Profile"
              width={150}
              height={100}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </section>

        {/* My Qualification Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            My Qualification
          </h2>

          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-6 hover:pl-8 transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">
                B.Tech - CyberSecurity
              </h3>
              <p className="text-orange-600 font-medium mb-2">
                JAIN (Deemed-to-be University)
              </p>
              <div className="flex items-center gap-4 text-gray-600 text-sm mb-2">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  2022 - 2026
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Banglore, India
                </span>
              </div>
              <p className="text-gray-700">
                I am doing B.Tech in Computer Science major in CyberSecurity and
                minor in Artifical Intelligence. <br /> GPA: 8.0
              </p>
            </div>
          </div>
        </section>

        {/* Certifications and Licenses Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Certifications and Licenses
          </h2>

          <div className="space-y-8">
            <div className="border-l-4 border-yellow-500 pl-6 hover:pl-8 transition-all">
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Certified Network Defender(CND) - EC Council
                  </h3>
                  <p className="text-orange-600 font-medium mb-1">
                    EC Council
                  </p>
                  <div className="flex items-center gap-4 text-gray-600 text-sm mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Issued Apr 2025 • Expires Apr 2028
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" />
                      Credential ID: ECC3264597801
                    </span>
                  </div>
                  <p className="text-gray-700">
                    Gained hands-on knowledge of network security, including
                    intrusion detection, incident response, firewall
                    configuration, and threat analysis. Trained to defend,
                    detect, and respond to network-based attacks in enterprise
                    environments.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6 hover:pl-8 transition-all">
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Google Cybersecurity
                  </h3>
                  <p className="text-orange-600 font-medium mb-1">Coursera</p>
                  <div className="flex items-center gap-4 text-gray-600 text-sm mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Issued Mar 2024
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" />
                      Credential ID: 3JX3SK7LMYK
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* My Experience Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Places where I worked at
          </h2>

          <div className="space-y-8">
            <div className="border-l-4 border-green-500 pl-6 hover:pl-8 transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">
                Cyber Security Intern
              </h3>
              <p className="text-orange-600 font-medium mb-2">
                Miles Education
              </p>
              <div className="flex items-center gap-4 text-gray-600 text-sm mb-2">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Apr 2024 - May 2024
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Bangalore, India
                </span>
              </div>
              <p className="text-gray-700">
                Skills - Cisco Packet Tracer , Wireshark , Python, Burpsuite.{" "}
                <br />
                Developed various network topologies to optimize packet transfer
                efficiency. Utilized Wireshark to trace and analyze packet
                transfers and timing, and employed Python to automate packet
                capture and data analysis. This project provided me with
                hands-on experience in network analysis and cybersecurity
                protocols, enhancing my ability to contribute effectively to
                cybersecurity initiatives.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Few Things I've Built
          </h2>

          <div className="space-y-8">
            <div className="border-l-4 border-orange-500 pl-6 hover:pl-8 transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">
                <Link
                  href="https://night-snack-store.vercel.app/auth/signin"
                  className="text-orange-600 hover:text-orange-700"
                >
                  Night Snack Store ⤴
                </Link>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Developed a full-stack Night Snack Store web application using Next.js and NextAuth, enabling hostel
students to order snacks easily and sellers to manage listings with Google authentication. Implemented
role-switching between buyer and seller and simplified order payments with cash or UPI on delivery.{" "}
                <br />
                Tools used: Next.js, Node.js, Google Auth, Atlas.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6 hover:pl-8 transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">
                <Link
                  href="#"
                  className="text-orange-600 hover:text-orange-700"
                >
                  Intrusion Detection System (IDS) Using Machine Learning ⤴
                </Link>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Develop an IDS that uses ML models to classify network traffic
                as normal or malicious. Use datasets like KDD Cup 99 or NSL-KDD.{" "}
                <br />
                Tools used: Python, Scikit-learn, TensorFlow/PyTorch.
              </p>
            </div>
          </div>

          <div className="mt-10 space-y-4">
            <details className="group">
              <summary className="cursor-pointer text-orange-600 hover:text-orange-700 font-medium flex items-center">
                <ChevronRight className="w-4 h-4 mr-1 transition-transform group-open:rotate-90" />
                View all others
              </summary>
              <div className="mt-6 pl-5 space-y-6">
                <div className="border-l-4 border-gray-300 pl-6 hover:pl-8 transition-all">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    <Link
                      href="https://github.com/daksh20031231/Hospital-Management-System-with-Billing-system"
                      className="text-orange-600 hover:text-orange-700"
                    >
                      Hospital Managment with Billing System⤴
                    </Link>
                  </h4>
                  <p className="text-gray-700">
                    Build a Hospital Managment System including Calendly and
                    many other api to maintain and automate the hospital
                    management.
                  </p>
                </div>
                <div className="border-l-4 border-gray-300 pl-6 hover:pl-8 transition-all">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    <Link
                      href="#"
                      className="text-orange-600 hover:text-orange-700"
                    >
                      Secure File Vault with End-to-End Encryption ⤴
                    </Link>
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                A secure cloud-based file storage system where users can
                upload/download files with encryption. Uses AES encryption
                before storing files and decrypts only after authentication.{" "}
                <br />
                Tools used: Next.js, Node.js, Python (Flask/FastAPI), Crypto.js,
                Firebase/PostgreSQL.
              </p>
                </div>
              </div>
            </details>

            <details className="group">
              <summary className="cursor-pointer text-orange-600 hover:text-orange-700 font-medium flex items-center">
                <ChevronRight className="w-4 h-4 mr-1 transition-transform group-open:rotate-90" />
                currently testing out
              </summary>
              <div className="mt-6 pl-5 space-y-6">
                <div className="border-l-4 border-blue-300 pl-6 hover:pl-8 transition-all">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Paytm Clone
                  </h4>
                  <p className="text-gray-700">
                    Working on Paytm clone to learn about JWT Token, Different
                    API's and too learn deaply about Authentication Systems.
                  </p>
                </div>
              </div>
            </details>
          </div>
        </section>

        {/* Some of my Publications Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Some of my Publications
          </h2>

          <div className="space-y-8">
            <div className="border-l-4 border-purple-500 pl-6 hover:pl-8 transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">
                <Link
                  href="https://www.linkedin.com/in/daksh20031231/overlay/1737902578134/single-media-viewer/?profileId=ACoAADk_hWQBuFyUNeMabiiuyknbWjEl5-3W7nM"
                  className="text-orange-600 hover:text-orange-700 flex items-center gap-2"
                >
                  Leveraging Face Security API For Enhancing Edge Computing
                  Security ⤴
                </Link>
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                IJCTR Publication • Jan 2025 • Co-authored with Vasi N Jain,
                Vaibhav Dhonde, Dhrutik Kummar Patel, Rishav Ranjan and Dr. S.
                Ravikumar.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This paper explores using a Face Security API to enhance edge
                computing security, addressing challenges like unauthorized
                access and data breaches. It evaluates the API’s effectiveness,
                examines its limitations, and considers ethical implications,
                offering insights and recommendations.
              </p>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Achievements I'm Proud Of
          </h2>

          <div className="space-y-6">
            <div className="flex items-center bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
              <span className="text-gray-700">
                Google Arcade Participant 2024 : Learned about GCS and many
                more.
              </span>
            </div>
          </div>
        </section>

        {/* Connect Me Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Contact Me</h2>
          <div className="grid grid-cols-2 gap-4 max-w-lg">
            {/* Top Row */}
            <Link
              href="https://github.com/daksh20031231"
              className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-gray-700" />
              <span className="text-gray-700 font-medium">daksh20031231</span>
            </Link>
            <Link
              href="https://linkedin.com/in/daksh20031231"
              className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-gray-700" />
              <span className="text-gray-700 font-medium">daksh20031231</span>
            </Link>

            {/* Bottom Row */}
            <Link
              href="https://www.instagram.com/daksh_20031231_/"
              className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 group"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-gray-700" />
              <span className="text-gray-700 font-medium">daksh_20031231_</span>
            </Link>
            <Link
              href="https://twitter.com/daksh20031231"
              className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 group"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-gray-700" />
              <span className="text-gray-700 font-medium">daksh20031231</span>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8">
          <div className="text-center">
            <p className="text-gray-600 font-medium">
              Made with ❤️ by Daksh Sharma
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
