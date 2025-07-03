"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Mail, Phone, MapPin, Download } from "lucide-react";

export default function NutrivigilancePage() {
  const [activeTab, setActiveTab] = useState("nutrivigilance");

  return (
    <div className="min-h-screen">
      {/* Top banner image */}
      <div className="min-h-[40vh] sm:min-h-[50vh] h-[40vh] sm:h-[50vh]">
        <img
          src="./About.jpg"
          alt="productbanner"
          className="h-full w-full bg-no-repeat object-cover bg-center"
        />
      </div>

      <div className="max-w-6xl mx-auto p-3 sm:p-4 lg:p-6">
        {/* Tab Navigation Section */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4 sm:mb-6 lg:mb-8 h-auto">
            <TabsTrigger
              value="nutrivigilance"
              className="text-xs sm:text-sm lg:text-base py-2 sm:py-3"
            >
              Nutrivigilance
            </TabsTrigger>
            <TabsTrigger
              value="how-to-report"
              className="text-xs sm:text-sm lg:text-base py-2 sm:py-3"
            >
              How to report
            </TabsTrigger>
          </TabsList>

          {/* Nutrivigilance Tab Content */}
          <TabsContent
            value="nutrivigilance"
            className="space-y-4 sm:space-y-6 lg:space-y-8"
          >
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
                NUTRIVIGILANCE
              </h1>

              {/* Description Paragraphs */}
              <div className="prose max-w-none text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-sm sm:text-base">
                <p>
                  <strong>Nutrivigilance (NV)</strong> refers to the monitoring and surveillance of the safety and efficacy of nutrients...
                </p>
                <p>
                  Department of Pharmacovigilance of Indus Viva Limited performs all Pharmacovigilance related activities...
                </p>
              </div>

              {/* What to Report Section */}
              <div className="mt-8 sm:mt-10 lg:mt-12">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
                  <img
                    src="https://indusviva.com/wp-content/uploads/2025/03/What-to-report.jpg"
                    alt="Doctor reviewing medical documents"
                    className="w-full lg:w-80 h-48 sm:h-56 lg:h-60 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                      WHAT TO REPORT
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      <strong>
                        All Serious & Non-serious Adverse Event (AE) or Adverse Drug Reaction (ADR)
                      </strong>{" "}
                      related to the use of Indus Viva Supplements should be reported...
                    </p>
                  </div>
                </div>
              </div>

              {/* Minimum Information Section */}
              <div className="mt-8 sm:mt-10 lg:mt-12">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                  Minimum Information to Report
                </h2>
                <p className="text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base">
                  An adverse event report should contain the four essential information:
                </p>

                {/* Consumer and Reporter Details */}
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                  <div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
                      Consumer's Details
                    </h3>
                    <ul className="space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base">
                      <li>• Name/ Initials</li>
                      <li>• Gender, age</li>
                      <li>• Contact number</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
                      Reporter's Details
                    </h3>
                    <ul className="space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base">
                      <li>• Name</li>
                      <li>• Occupation</li>
                      <li>• Address</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* How to Report Tab Content */}
          <TabsContent
            value="how-to-report"
            className="space-y-4 sm:space-y-6 lg:space-y-8"
          >
            {/* Report Form Images */}
            <div className="rounded-lg overflow-hidden">
              <div className="p-2 sm:p-4 flex flex-col xl:flex-row items-center justify-between gap-3 sm:gap-4">
                <img
                  src="https://indusviva.com/wp-content/uploads/2025/03/ADR_Reporting_Form_Version-01f.jpg"
                  alt="Adverse Drug Reaction Reporting Form"
                  className="w-full h-auto object-contain max-h-[400px] sm:max-h-[600px] lg:max-h-[800px]"
                />
                <img
                  src="https://indusviva.com/wp-content/uploads/2025/03/ADR_Reporting_Form_Version-02f.jpg"
                  alt="Adverse Drug Reaction Reporting Form"
                  className="w-full h-auto object-contain max-h-[400px] sm:max-h-[600px] lg:max-h-[800px]"
                />
              </div>

              {/* Download Button */}
              <div className="bg-gray-50 p-4 sm:p-6 border-t">
                <div className="text-center space-y-3 sm:space-y-4">
                  <a href="./indusvivaADR3.pdf" target="_blank" rel="noreferrer">
                    <Button
                      className="bg-teal-600 hover:bg-teal-700 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-sm sm:text-base lg:text-lg font-semibold w-full sm:w-auto"
                      size="lg"
                    >
                      <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="hidden sm:inline">
                        Adverse Event Report Form Download
                      </span>
                      <span className="sm:hidden">Download Form</span>
                    </Button>
                  </a>

                  {/* Submission Info */}
                  <div className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto mt-3">
                    <p>
                      One may submit filled in Adverse report form by e-mailing to
                      <button className="text-teal-600 hover:text-teal-700 underline font-medium break-all">
                        nutrivigilance@indusviva.com
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Contact & Disclosure Cards */}
        <div className="space-y-3 sm:space-y-4 lg:space-y-6 mt-6 sm:mt-8">
          {/* How to Report Card */}
          <Card>
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">
                HOW TO REPORT
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <div>
                <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                  Any adverse event regarding Indus Viva's Supplements can be reported to Nutrivigilance Department.
                </p>
                <Button className="bg-teal-600 hover:bg-teal-700 text-white text-sm sm:text-base w-full sm:w-auto">
                  Get Adverse Report Form ADF
                </Button>
              </div>

              {/* Contact Details Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <Card className="text-center p-3 sm:p-4 lg:p-6">
                  <Mail className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-teal-600 mx-auto mb-2 sm:mb-3 lg:mb-4" />
                  <h3 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">
                    EMAIL
                  </h3>
                  <p className="text-teal-600 text-xs sm:text-sm break-all">
                    nutrivigilance@indusviva.com
                  </p>
                </Card>

                <Card className="text-center p-3 sm:p-4 lg:p-6">
                  <Phone className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-teal-600 mx-auto mb-2 sm:mb-3 lg:mb-4" />
                  <h3 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">
                    CONTACT NUMBER
                  </h3>
                  <p className="text-teal-600 text-xs sm:text-sm">7022207043</p>
                </Card>

                <Card className="text-center p-3 sm:p-4 lg:p-6 sm:col-span-2 lg:col-span-1">
                  <MapPin className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-teal-600 mx-auto mb-2 sm:mb-3 lg:mb-4" />
                  <h3 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">
                    Postal/Courier Address
                  </h3>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                    IndusViva HealthSciences Private Limited, No 92-1-36, Viva Tower, Nandi Durga Road, Jayamahal Extension, Bangalore – 560046.
                  </p>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Disclaimer Card */}
          <Card>
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="text-base sm:text-lg lg:text-xl font-bold text-gray-800">
                DISCLAIMER
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                Consumers are advised to consult doctors for any health issues. Pharmacovigilance helps assess risk-benefit profiles...
              </p>
            </CardContent>
          </Card>

          {/* Confidentiality Note Card */}
          <Card>
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="text-base sm:text-lg lg:text-xl font-bold text-gray-800">
                CONFIDENTIALITY NOTE
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                All personal data is kept confidential unless required by law or regulation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
