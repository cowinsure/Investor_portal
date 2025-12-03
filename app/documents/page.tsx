"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FileText, Image, Eye, X } from "lucide-react";
import { useAuth } from "@/core/context/AuthContext";
import Section from "@/components/ui/Section";

type Document = {
  id: number;
  title: string;
  type: string;
  fileType: string;
  fileUrl: string;
  updated: string;
  size: string;
};

const documents: Document[] = [
  {
    id: 1,
    title: "InsureCow – Investment Deed",
    type: "Deed",
    fileType: "pdf",
    fileUrl: "/Deed.pdf",
    updated: "2025-05-10",
    size: "1.2 MB",
  },
];

export default function DocumentsPage() {
  const { userId } = useAuth();
  const router = useRouter();
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!userId) {
      router.push("/auth/login");
    }
  }, [userId, router]);

  const openModal = (doc: Document) => {
    setSelectedDoc(doc);
    setShowModal(true);
    setTimeout(() => setIsModalOpen(true), 10);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setShowModal(false), 300);
    setTimeout(() => setSelectedDoc(null), 310);
  };
  console.log(selectedDoc);

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-100 via-gray-50 to-emerald-50 p-8">
      <Section>
        {/* Header */}
        <div className="max-w-5xl mx-auto mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Documents Center</h1>
          <p className="text-gray-600 mt-1">
            View and download your legal documents, deeds, agreements and
            project contracts.
          </p>
        </div>

        {/* Document Cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="
              bg-white/70 backdrop-blur-xl p-6 rounded-2xl
              border border-emerald-200/60 shadow-lg shadow-emerald-200/40
              hover:shadow-emerald-300/60 transition-all cursor-pointer group
            "
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-emerald-200/40 flex items-center justify-center mb-4">
                {doc.fileType === "pdf" ? (
                  <FileText className="w-6 h-6 text-emerald-700" />
                ) : (
                  <Image className="w-6 h-6 text-emerald-700" />
                )}
              </div>

              {/* Title */}
              <h2 className="font-semibold text-emerald-900 group-hover:text-emerald-700">
                {doc.title}
              </h2>

              <p className="text-sm text-emerald-700/70 mt-1">{doc.type}</p>

              {/* Meta */}
              <div className="text-xs text-emerald-700/50 mt-3">
                <p>Last Updated: {doc.updated}</p>
                {/* <p>Size: {doc.size}</p> */}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-center mt-5 pt-4 border-t border-emerald-200/30">
                <button
                  onClick={() => openModal(doc)}
                  className="flex items-center gap-2 text-emerald-700 hover:text-emerald-900 transition cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  View
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Modal */}
        {showModal && selectedDoc && (
          <div
            className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-99999 p-4 transition-opacity duration-300 ${
              isModalOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className={`bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden transform transition-transform duration-300 ${
                isModalOpen ? "scale-100" : "scale-95"
              }`}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-emerald-200/30">
                <div>
                  <h2 className="text-xl font-semibold text-emerald-900">
                    {selectedDoc.title}
                  </h2>
                  <p className="text-sm text-emerald-700/70">
                    {selectedDoc.type} • {selectedDoc.size}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-rose-100 rounded-lg transition"
                >
                  <X className="w-5 h-5 text-red-700 cursor-pointer" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 max-h-[70vh] overflow-auto">
                {selectedDoc.fileType === "pdf" ? (
                  <iframe
                    src={selectedDoc.fileUrl}
                    width="100%"
                    height="600"
                    style={{ border: "none", borderRadius: "8px" }}
                    title={selectedDoc.title}
                  ></iframe>
                ) : selectedDoc.fileType === "png" ? (
                  <div className="flex items-center justify-center h-96 bg-gray-100 rounded-lg">
                    <div className="text-center">
                      <Image className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                      <p className="text-emerald-700">Image Document</p>
                      <p className="text-sm text-emerald-600/70 mt-2">
                        Image viewer would display here
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-96 bg-gray-100 rounded-lg">
                    <p className="text-emerald-700">Unsupported file type</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </Section>
    </div>
  );
}
