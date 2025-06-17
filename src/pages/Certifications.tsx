
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Machine Learning Internship",
      organization: "NoviTech",
      date: "2024",
      type: "Internship",
      description: "Hands-on experience in ML algorithms, data preprocessing, and model deployment",
      skills: ["Python", "Scikit-learn", "TensorFlow", "Data Analysis"],
      status: "Completed"
    },
    {
      title: "Data Analytics Certification",
      organization: "NoviTech",
      date: "2024",
      type: "Professional",
      description: "Comprehensive training in data analysis techniques and statistical methods",
      skills: ["SQL", "Python", "Statistics", "Data Visualization"],
      status: "Completed"
    },
    {
      title: "Power BI Certification",
      organization: "Newton School & OfficeMaster",
      date: "2023",
      type: "Professional",
      description: "Advanced Power BI dashboard creation and business intelligence solutions",
      skills: ["Power BI", "DAX", "Data Modeling", "Business Intelligence"],
      status: "Completed"
    },
    {
      title: "AI Tools & ChatGPT Mastery",
      organization: "be10x",
      date: "2023",
      type: "Specialized",
      description: "Expertise in leveraging AI tools for productivity and automation",
      skills: ["AI Tools", "ChatGPT", "Automation", "Prompt Engineering"],
      status: "Completed"
    },
    {
      title: "Web Readiness Certification",
      organization: "Study Comrade x Startup India",
      date: "2023",
      type: "Government",
      description: "Digital readiness and web technologies for startups and entrepreneurs",
      skills: ["Web Development", "Digital Marketing", "Startup Ecosystem"],
      status: "Completed"
    },
    {
      title: "Excel with AI",
      organization: "OfficeMaster",
      date: "2023",
      type: "Professional",
      description: "Advanced Excel techniques enhanced with AI capabilities",
      skills: ["Excel", "AI Integration", "Data Analysis", "Automation"],
      status: "Completed"
    },
    {
      title: "Business Visualization",
      organization: "Forage",
      date: "2023",
      type: "Virtual",
      description: "Virtual experience in business data visualization and reporting",
      skills: ["Data Visualization", "Business Analytics", "Reporting"],
      status: "Completed"
    }
  ];

  const getTypeColor = (type) => {
    const colorMap = {
      "Internship": "bg-blue-100 text-blue-800",
      "Professional": "bg-green-100 text-green-800",
      "Specialized": "bg-purple-100 text-purple-800",
      "Government": "bg-orange-100 text-orange-800",
      "Virtual": "bg-pink-100 text-pink-800"
    };
    return colorMap[type] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <Navigation />
      
      <div className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Certifications & Training
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Continuous learning and professional development across emerging technologies
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-indigo-600 mb-2">{certifications.length}</div>
                <div className="text-gray-700">Total Certifications</div>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-indigo-600 mb-2">5</div>
                <div className="text-gray-700">Organizations</div>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-indigo-600 mb-2">2024</div>
                <div className="text-gray-700">Latest Completion</div>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-indigo-600 mb-2">15+</div>
                <div className="text-gray-700">Skills Acquired</div>
              </CardContent>
            </Card>
          </div>

          {/* Certifications Timeline */}
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="group hover:scale-102 transition-all duration-300 shadow-lg hover:shadow-xl border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900 group-hover:text-indigo-600 transition-colors">
                          {cert.title}
                        </CardTitle>
                        <p className="text-lg text-gray-600 font-medium">{cert.organization}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge className={getTypeColor(cert.type)}>
                        {cert.type}
                      </Badge>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="mr-1 h-4 w-4" />
                        {cert.date}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge 
                      className={cert.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                      }
                    >
                      {cert.status}
                    </Badge>
                    <button className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors text-sm">
                      <ExternalLink className="mr-1 h-4 w-4" />
                      View Certificate
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Learning Goals */}
          <Card className="mt-16 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 text-center">
                Upcoming Learning Goals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Advanced AI/ML</h3>
                  <p className="text-gray-600 text-sm">Deep learning frameworks and neural networks</p>
                </div>
                <div className="text-center">
                  <div className="p-4 bg-gradient-to-br from-green-100 to-green-200 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Award className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Cloud Computing</h3>
                  <p className="text-gray-600 text-sm">AWS, Azure, and cloud architecture</p>
                </div>
                <div className="text-center">
                  <div className="p-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Award className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">DevOps</h3>
                  <p className="text-gray-600 text-sm">CI/CD, containerization, and automation</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
