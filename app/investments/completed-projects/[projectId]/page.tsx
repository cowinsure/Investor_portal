/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ArrowLeft,
  Users,
  Calendar,
  TrendingUp,
  ChevronRight,
  ChevronLeft,
  ChevronsLeft,
  ChevronsRight,
  Package,
  Clock,
} from "lucide-react";
import image from "../../../../public/projectimg.png";
import { PiSolarRoofBold } from "react-icons/pi";
import Section from "@/components/ui/Section";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

export const StaticProjectsData = {
  id: 3,
  title: "Community Project 03",
  farmersAssigned: 20,
  status: "Completed",
  startDate: "2024-01-15",
  endDate: "2024-05-15",
  projectDuration: 4,
  overview:
    "Sustainable dairy farming focused on beef fattening using free-range grazing techniques.",
  allocation: 25474776,
  image: image,
  investment_amnt: 1230000,
  return_on_investment_percentage: "4.71",
  expected_return_amnt: 1287933,
  sheds: [
    {
      id: 1,
      shed_img: "shed_madaripur_01.jpg",
      shed_name: "Pakundia Shed-02",
      shed_location: "Dasar, Kalkini, Madaripur, Bangladesh",
      shed_capacity: 60,
      assigned_farmer: 6,
      farmers: [
        {
          img: "/farmerImages/farmerimg1.jpeg",
          thana: "Shibchar",
          union: "Bandarkhola",
          zilla: "Madaripur",
          assets: 0,
          user_id: 3001,
          village: "Village: Char Janajat, Union: Bandarkhola, Thana: Shibchar",
          initials: "MR",
          location: "Pakundia, Bangladesh",
          policies: 0,
          join_date: "2024-11-12",
          com_org_id: 0,
          farmer_name: "Md. Rahim",
          mobile_number: "01742389120",
          profit: 3200,
          livestock_details: [
            {
              reference_id: "cow_f1a01",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "268.00",
              age_in_months: 32,
              status: "sold",
            },
            {
              reference_id: "cow_f1a02",
              color: "Black",
              breed: "Friesian",
              weight_kg: "301.00",
              age_in_months: 40,
              status: "sold",
            },
            {
              reference_id: "cow_f1a03",
              color: "White",
              breed: "Friesian",
              weight_kg: "242.00",
              age_in_months: 29,
              status: "sold",
            },
            {
              reference_id: "cow_f1a04",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "277.00",
              age_in_months: 31,
              status: "sold",
            },
            {
              reference_id: "cow_f1a05",
              color: "Black",
              breed: "Friesian",
              weight_kg: "315.00",
              age_in_months: 41,
              status: "sold",
            },
            {
              reference_id: "cow_f1a06",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "255.00",
              age_in_months: 26,
              status: "sold",
            },
            {
              reference_id: "cow_f1a07",
              color: "Black",
              breed: "Friesian",
              weight_kg: "233.00",
              age_in_months: 28,
              status: "sold",
            },
            {
              reference_id: "cow_f1a08",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "280.00",
              age_in_months: 34,
              status: "sold",
            },
            {
              reference_id: "cow_f1a09",
              color: "White",
              breed: "Friesian",
              weight_kg: "322.00",
              age_in_months: 43,
              status: "sold",
            },
            {
              reference_id: "cow_f1a10",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "266.00",
              age_in_months: 30,
              status: "sold",
            },
          ],
          expense_details: [
            { title: "Cattle Purchase", amount: 900000 },
            { title: "Feed", date: "2024-10-02", amount: 210765 },
            { title: "Medical", date: "2024-10-07", amount: 20710 },
            { title: "Premium", date: "2024-10-18", amount: 13550 },
            {
              title: "Identification Cost",
              date: "2024-10-22",
              amount: 2501,
            },
            { title: "Operational Cost", date: "2024-10-22", amount: 83000 },
          ],
        },
        {
          img: "/farmerImages/farmerimg3.jpeg",
          thana: "Sadarpur",
          union: "Nasirabad",
          zilla: "Faridpur",
          assets: 0,
          user_id: 3002,
          village: "Village: Brahmankanda, Union: Nasirabad, Thana: Sadarpur",
          initials: "AH",
          location: "Pakundia, Bangladesh",
          policies: 0,
          join_date: "2024-09-25",
          com_org_id: 0,
          farmer_name: "Abdul Hamid",
          mobile_number: "01856392014",
          profit: 4100,
          livestock_details: [
            {
              reference_id: "cow_f2a01",
              color: "Black",
              breed: "Sahiwal",
              weight_kg: "290.00",
              age_in_months: 34,
              status: "sold",
            },
            {
              reference_id: "cow_f2a02",
              color: "Brown",
              breed: "Friesian",
              weight_kg: "245.00",
              age_in_months: 27,
              status: "sold",
            },
            {
              reference_id: "cow_f2a03",
              color: "White",
              breed: "Friesian",
              weight_kg: "312.00",
              age_in_months: 39,
              status: "sold",
            },
            {
              reference_id: "cow_f2a04",
              color: "Black",
              breed: "Sahiwal",
              weight_kg: "270.00",
              age_in_months: 33,
              status: "sold",
            },
            {
              reference_id: "cow_f2a05",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "298.00",
              age_in_months: 38,
              status: "sold",
            },
            {
              reference_id: "cow_f2a06",
              color: "White",
              breed: "Friesian",
              weight_kg: "330.00",
              age_in_months: 42,
              status: "sold",
            },
            {
              reference_id: "cow_f2a07",
              color: "Black",
              breed: "Friesian",
              weight_kg: "238.00",
              age_in_months: 26,
              status: "sold",
            },
            {
              reference_id: "cow_f2a08",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "260.00",
              age_in_months: 29,
              status: "sold",
            },
            {
              reference_id: "cow_f2a09",
              color: "White",
              breed: "Sahiwal",
              weight_kg: "305.00",
              age_in_months: 37,
              status: "sold",
            },
            {
              reference_id: "cow_f2a10",
              color: "Black",
              breed: "Friesian",
              weight_kg: "319.00",
              age_in_months: 41,
              status: "sold",
            },
          ],
          expense_details: [
            { title: "Cattle Purchase", amount: 890000 },
            { title: "Feed", date: "2024-10-02", amount: 224775 },
            { title: "Medical", date: "2024-10-07", amount: 19905 },
            { title: "Premium", date: "2024-10-18", amount: 12500 },
            {
              title: "Identification Cost",
              date: "2024-10-22",
              amount: 2501,
            },
            { title: "Operational Cost", date: "2024-10-22", amount: 83500 },
          ],
        },
        {
          img: "/farmerImages/farmerimg2.jpeg",
          thana: "Bhedarganj",
          union: "Chitolia",
          zilla: "Shariatpur",
          assets: 0,
          user_id: 3003,
          village: "Village: Charkandi, Union: Chitolia, Thana: Bhedarganj",
          initials: "NS",
          location: "Pakundia, Bangladesh",
          policies: 0,
          join_date: "2024-10-14",
          com_org_id: 0,
          farmer_name: "Nusrat Sultana",
          mobile_number: "01973852014",
          profit: 2750,
          livestock_details: [
            {
              reference_id: "cow_f3a01",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "256.00",
              age_in_months: 29,
              status: "sold",
            },
            {
              reference_id: "cow_f3a02",
              color: "White",
              breed: "Friesian",
              weight_kg: "320.00",
              age_in_months: 41,
              status: "sold",
            },
            {
              reference_id: "cow_f3a03",
              color: "Black",
              breed: "Sahiwal",
              weight_kg: "275.00",
              age_in_months: 32,
              status: "sold",
            },
            {
              reference_id: "cow_f3a04",
              color: "Brown",
              breed: "Friesian",
              weight_kg: "240.00",
              age_in_months: 27,
              status: "sold",
            },
            {
              reference_id: "cow_f3a05",
              color: "Black",
              breed: "Friesian",
              weight_kg: "311.00",
              age_in_months: 38,
              status: "sold",
            },
            {
              reference_id: "cow_f3a06",
              color: "White",
              breed: "Sahiwal",
              weight_kg: "265.00",
              age_in_months: 30,
              status: "sold",
            },
            {
              reference_id: "cow_f3a07",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "286.00",
              age_in_months: 33,
              status: "sold",
            },
            {
              reference_id: "cow_f3a08",
              color: "Black",
              breed: "Friesian",
              weight_kg: "235.00",
              age_in_months: 26,
              status: "sold",
            },
            {
              reference_id: "cow_f3a09",
              color: "White",
              breed: "Friesian",
              weight_kg: "327.00",
              age_in_months: 43,
              status: "sold",
            },
            {
              reference_id: "cow_f3a10",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "270.00",
              age_in_months: 31,
              status: "sold",
            },
          ],
          expense_details: [
            { title: "Cattle Purchase", amount: 892000 },
            { title: "Feed", date: "2024-10-02", amount: 258000 },
            { title: "Medical", date: "2024-10-07", amount: 19365 },
            { title: "Premium", date: "2024-10-18", amount: 129925 },
            {
              title: "Identification Cost",
              date: "2024-10-22",
              amount: 2501,
            },
            { title: "Operational Cost", date: "2024-10-22", amount: 83500 },
          ],
        },
        {
          img: "/farmerImages/farmerimg5.jpeg",
          thana: "Charbhadrasan",
          union: "Char Harirampur",
          zilla: "Faridpur",
          assets: 0,
          user_id: 3004,
          village:
            "Village: Char Ghoshpur, Union: Char Harirampur, Thana: Charbhadrasan",
          initials: "SS",
          location: "Pakundia, Bangladesh",
          policies: 0,
          join_date: "2024-08-22",
          com_org_id: 0,
          farmer_name: "Shamim Sikder",
          mobile_number: "01642938052",
          profit: 3550,
          livestock_details: [
            {
              reference_id: "cow_f4a01",
              color: "Black",
              breed: "Friesian",
              weight_kg: "318.00",
              age_in_months: 40,
              status: "sold",
            },
            {
              reference_id: "cow_f4a02",
              color: "Brown",
              breed: "Friesian",
              weight_kg: "248.00",
              age_in_months: 27,
              status: "sold",
            },
            {
              reference_id: "cow_f4a03",
              color: "White",
              breed: "Sahiwal",
              weight_kg: "270.00",
              age_in_months: 33,
              status: "sold",
            },
            {
              reference_id: "cow_f4a04",
              color: "Black",
              breed: "Sahiwal",
              weight_kg: "295.00",
              age_in_months: 35,
              status: "sold",
            },
            {
              reference_id: "cow_f4a05",
              color: "Brown",
              breed: "Friesian",
              weight_kg: "322.00",
              age_in_months: 42,
              status: "sold",
            },
            {
              reference_id: "cow_f4a06",
              color: "White",
              breed: "Friesian",
              weight_kg: "238.00",
              age_in_months: 26,
              status: "sold",
            },
            {
              reference_id: "cow_f4a07",
              color: "Black",
              breed: "Sahiwal",
              weight_kg: "285.00",
              age_in_months: 32,
              status: "sold",
            },
            {
              reference_id: "cow_f4a08",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "276.00",
              age_in_months: 30,
              status: "sold",
            },
            {
              reference_id: "cow_f4a09",
              color: "White",
              breed: "Friesian",
              weight_kg: "335.00",
              age_in_months: 44,
              status: "sold",
            },
            {
              reference_id: "cow_f4a10",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "260.00",
              age_in_months: 29,
              status: "sold",
            },
          ],
          expense_details: [
            { title: "Cattle Purchase", amount: 920000 },
            { title: "Feed", date: "2024-10-02", amount: 239500 },
            { title: "Medical", date: "2024-10-07", amount: 18490 },
            { title: "Premium", date: "2024-10-18", amount: 14500 },
            {
              title: "Identification Cost",
              date: "2024-10-22",
              amount: 2501,
            },
            { title: "Operational Cost", date: "2024-10-22", amount: 83550 },
          ],
        },
        {
          img: "/farmerImages/farmerimg4.jpeg",
          thana: "Naria",
          union: "Chamta",
          zilla: "Shariatpur",
          assets: 0,
          user_id: 3005,
          village: "Village: Purba Chamta, Union: Chamta, Thana: Naria",
          initials: "AR",
          location: "Pakundia, Bangladesh",
          policies: 0,
          join_date: "2024-07-30",
          com_org_id: 0,
          farmer_name: "Ayesha Rahman",
          mobile_number: "01758294039",
          profit: 2980,
          livestock_details: [
            {
              reference_id: "cow_f5a01",
              color: "White",
              breed: "Friesian",
              weight_kg: "308.00",
              age_in_months: 38,
              status: "sold",
            },
            {
              reference_id: "cow_f5a02",
              color: "Black",
              breed: "Sahiwal",
              weight_kg: "292.00",
              age_in_months: 35,
              status: "sold",
            },
            {
              reference_id: "cow_f5a03",
              color: "Brown",
              breed: "Friesian",
              weight_kg: "246.00",
              age_in_months: 28,
              status: "sold",
            },
            {
              reference_id: "cow_f5a04",
              color: "White",
              breed: "Sahiwal",
              weight_kg: "269.00",
              age_in_months: 32,
              status: "sold",
            },
            {
              reference_id: "cow_f5a05",
              color: "Black",
              breed: "Friesian",
              weight_kg: "317.00",
              age_in_months: 41,
              status: "sold",
            },
            {
              reference_id: "cow_f5a06",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "284.00",
              age_in_months: 34,
              status: "sold",
            },
            {
              reference_id: "cow_f5a07",
              color: "White",
              breed: "Friesian",
              weight_kg: "243.00",
              age_in_months: 27,
              status: "sold",
            },
            {
              reference_id: "cow_f5a08",
              color: "Black",
              breed: "Sahiwal",
              weight_kg: "278.00",
              age_in_months: 31,
              status: "sold",
            },
            {
              reference_id: "cow_f5a09",
              color: "Brown",
              breed: "Friesian",
              weight_kg: "326.00",
              age_in_months: 43,
              status: "sold",
            },
            {
              reference_id: "cow_f5a10",
              color: "Black",
              breed: "Sahiwal",
              weight_kg: "288.00",
              age_in_months: 33,
              status: "sold",
            },
          ],
          expense_details: [
            { title: "Cattle Purchase", amount: 880000 },
            { title: "Feed", date: "2024-10-02", amount: 265600 },
            { title: "Medical", date: "2024-10-07", amount: 19295 },
            { title: "Premium", date: "2024-10-18", amount: 12500 },
            {
              title: "Identification Cost",
              date: "2024-10-22",
              amount: 2501,
            },
            { title: "Operational Cost", date: "2024-10-22", amount: 83510 },
          ],
        },
        {
          img: "/farmerImages/farmerimg6.jpeg",
          thana: "Delduar",
          union: "Elasin",
          zilla: "Tangail",
          assets: 0,
          user_id: 5006,
          village: "Village: Elasin, Union: Elasin, Thana: Delduar",
          initials: "MR",
          location: "Pakundia, Bangladesh",
          policies: 0,
          join_date: "2025-10-22",
          com_org_id: 0,
          farmer_name: "Mizanur Rahman",
          mobile_number: "01744568211",
          profit: 1800,
          livestock_details: [
            {
              reference_id: "cow_d12bf1a1",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "260.00",
              age_in_months: 40,
              status: "sold",
            },
            {
              reference_id: "cow_a34f09b8",
              color: "Black",
              breed: "Deshal",
              weight_kg: "230.00",
              age_in_months: 36,
              status: "sold",
            },
            {
              reference_id: "cow_c45aa192",
              color: "White",
              breed: "Friesian",
              weight_kg: "280.00",
              age_in_months: 42,
              status: "sold",
            },
            {
              reference_id: "cow_f12c8e71",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "255.00",
              age_in_months: 34,
              status: "sold",
            },
            {
              reference_id: "cow_d91fbb82",
              color: "Black",
              breed: "Sahiwal",
              weight_kg: "240.00",
              age_in_months: 38,
              status: "sold",
            },
            {
              reference_id: "cow_e77ac992",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "265.00",
              age_in_months: 35,
              status: "sold",
            },
            {
              reference_id: "cow_a81dc001",
              color: "Black",
              breed: "Deshal",
              weight_kg: "245.00",
              age_in_months: 39,
              status: "sold",
            },
            {
              reference_id: "cow_b10fa771",
              color: "Red",
              breed: "Sindhi",
              weight_kg: "275.00",
              age_in_months: 43,
              status: "sold",
            },
            {
              reference_id: "cow_c48bd552",
              color: "White",
              breed: "Friesian",
              weight_kg: "290.00",
              age_in_months: 45,
              status: "sold",
            },
            {
              reference_id: "cow_d18aa981",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "250.00",
              age_in_months: 37,
              status: "sold",
            },
          ],
          expense_details: [
            { title: "Cattle Purchase", amount: 895000 },
            { title: "Feed", date: "2024-10-02", amount: 246280 },
            { title: "Medical", date: "2024-10-07", amount: 19280 },
            { title: "Premium", date: "2024-10-18", amount: 12550 },
            {
              title: "Identification Cost",
              date: "2024-10-22",
              amount: 2501,
            },
            { title: "Operational Cost", date: "2024-10-22", amount: 83540 },
          ],
        },
      ],
    },
    {
      id: 2,
      shed_img: "shed_faridpur_02.jpg",
      shed_name: "Bajitpur Shed-01",
      shed_location: "Alfadanga Bazar, Alfadanga, Faridpur, Bangladesh",
      shed_capacity: 60,
      assigned_farmer: 6,
      farmers: [
        {
          img: "/farmerImages/farmerimg7.jpeg",
          thana: "Kaliganj",
          union: "Baktarpur",
          zilla: "Gazipur",
          assets: 0,
          user_id: 5007,
          village: "Village: Baktarpur, Union: Baktarpur, Thana: Kaliganj",
          initials: "TS",
          location: "Bajitpur, Bangladesh",
          policies: 0,
          join_date: "2025-10-11",
          com_org_id: 0,
          farmer_name: "Tania Sultana",
          mobile_number: "01822345192",
          profit: 2600,
          livestock_details: [
            {
              reference_id: "cow_f91bb1a2",
              color: "Black",
              breed: "Sahiwal",
              weight_kg: "240.00",
              age_in_months: 32,
              status: "sold",
            },
            {
              reference_id: "cow_a13c29ff",
              color: "Red",
              breed: "Sindhi",
              weight_kg: "270.00",
              age_in_months: 39,
              status: "sold",
            },
            {
              reference_id: "cow_b28f1cc2",
              color: "White",
              breed: "Friesian",
              weight_kg: "300.00",
              age_in_months: 48,
              status: "sold",
            },
            {
              reference_id: "cow_c88fe711",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "250.00",
              age_in_months: 33,
              status: "sold",
            },
            {
              reference_id: "cow_d27bc912",
              color: "Black",
              breed: "Deshal",
              weight_kg: "235.00",
              age_in_months: 31,
              status: "sold",
            },
            {
              reference_id: "cow_e52bb221",
              color: "Red",
              breed: "Sindhi",
              weight_kg: "265.00",
              age_in_months: 37,
              status: "sold",
            },
            {
              reference_id: "cow_f71a1191",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "255.00",
              age_in_months: 36,
              status: "sold",
            },
            {
              reference_id: "cow_a67bc732",
              color: "White",
              breed: "Friesian",
              weight_kg: "295.00",
              age_in_months: 46,
              status: "sold",
            },
            {
              reference_id: "cow_b99df221",
              color: "Black",
              breed: "Sahiwal",
              weight_kg: "245.00",
              age_in_months: 34,
              status: "sold",
            },
            {
              reference_id: "cow_c78ba192",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "260.00",
              age_in_months: 38,
              status: "sold",
            },
          ],
          expense_details: [
            { title: "Cattle Purchase", amount: 877000 },
            { title: "Feed", date: "2024-10-02", amount: 295200 },
            { title: "Medical", date: "2024-10-07", amount: 18610 },
            { title: "Premium", date: "2024-10-18", amount: 12500 },
            {
              title: "Identification Cost",
              date: "2024-10-22",
              amount: 2501,
            },
            { title: "Operational Cost", date: "2024-10-22", amount: 83550 },
          ],
        },
        {
          img: "/farmerImages/farmerimg9.jpeg",
          thana: "Sreenagar",
          union: "Kolapara",
          zilla: "Munshiganj",
          assets: 0,
          user_id: 5008,
          village: "Village: Kolapara, Union: Kolapara, Thana: Sreenagar",
          initials: "HK",
          location: "Bajitpur, Bangladesh",
          policies: 0,
          join_date: "2025-09-29",
          com_org_id: 0,
          farmer_name: "Hasan Karim",
          mobile_number: "01789455211",
          profit: 3000,
          livestock_details: [
            {
              reference_id: "cow_f11cd882",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "255.00",
              age_in_months: 34,
              status: "sold",
            },
            {
              reference_id: "cow_b72ac551",
              color: "White",
              breed: "Friesian",
              weight_kg: "310.00",
              age_in_months: 50,
              status: "sold",
            },
            {
              reference_id: "cow_d81bd121",
              color: "Red",
              breed: "Sindhi",
              weight_kg: "280.00",
              age_in_months: 41,
              status: "sold",
            },
            {
              reference_id: "cow_e45bb131",
              color: "Black",
              breed: "Sahiwal",
              weight_kg: "235.00",
              age_in_months: 30,
              status: "sold",
            },
            {
              reference_id: "cow_a01df552",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "265.00",
              age_in_months: 36,
              status: "sold",
            },
            {
              reference_id: "cow_c28ae991",
              color: "Black",
              breed: "Deshal",
              weight_kg: "245.00",
              age_in_months: 33,
              status: "sold",
            },
            {
              reference_id: "cow_f88ba191",
              color: "Red",
              breed: "Sindhi",
              weight_kg: "275.00",
              age_in_months: 40,
              status: "sold",
            },
            {
              reference_id: "cow_b11ce221",
              color: "White",
              breed: "Friesian",
              weight_kg: "305.00",
              age_in_months: 49,
              status: "sold",
            },
            {
              reference_id: "cow_d77ba112",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "250.00",
              age_in_months: 35,
              status: "sold",
            },
            {
              reference_id: "cow_e18af221",
              color: "Black",
              breed: "Sahiwal",
              weight_kg: "240.00",
              age_in_months: 31,
              status: "sold",
            },
          ],
          expense_details: [
            { title: "Cattle Purchase", amount: 895000 },
            { title: "Feed", date: "2024-10-02", amount: 249165 },
            { title: "Medical", date: "2024-10-07", amount: 20350 },
            { title: "Premium", date: "2024-10-18", amount: 13500 },
            {
              title: "Identification Cost",
              date: "2024-10-22",
              amount: 2501,
            },
            { title: "Operational Cost", date: "2024-10-22", amount: 83580 },
          ],
        },
        {
          img: "/farmerImages/farmerimg14.jpeg",
          thana: "Nawabganj",
          union: "Shikaripara",
          zilla: "Dhaka",
          assets: 0,
          user_id: 5009,
          village: "Village: Shikaripara, Union: Shikaripara, Thana: Nawabganj",
          initials: "RB",
          location: "Bajitpur, Bangladesh",
          policies: 0,
          join_date: "2025-10-08",
          com_org_id: 0,
          farmer_name: "Rubel Biswas",
          mobile_number: "01694552213",
          profit: 2100,
          livestock_details: [
            {
              reference_id: "cow_f92bc182",
              color: "Black",
              breed: "Sahiwal",
              weight_kg: "245.00",
              age_in_months: 34,
              status: "sold",
            },
            {
              reference_id: "cow_d12cd891",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "260.00",
              age_in_months: 37,
              status: "sold",
            },
            {
              reference_id: "cow_a19ce772",
              color: "White",
              breed: "Friesian",
              weight_kg: "295.00",
              age_in_months: 47,
              status: "sold",
            },
            {
              reference_id: "cow_b88fe221",
              color: "Red",
              breed: "Sindhi",
              weight_kg: "275.00",
              age_in_months: 42,
              status: "sold",
            },
            {
              reference_id: "cow_c77bd771",
              color: "Black",
              breed: "Deshal",
              weight_kg: "240.00",
              age_in_months: 32,
              status: "sold",
            },
            {
              reference_id: "cow_e01af122",
              color: "White",
              breed: "Friesian",
              weight_kg: "300.00",
              age_in_months: 49,
              status: "sold",
            },
            {
              reference_id: "cow_f72bb552",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "255.00",
              age_in_months: 36,
              status: "sold",
            },
            {
              reference_id: "cow_a55dd971",
              color: "Black",
              breed: "Sahiwal",
              weight_kg: "250.00",
              age_in_months: 33,
              status: "sold",
            },
            {
              reference_id: "cow_c19aa271",
              color: "Red",
              breed: "Sindhi",
              weight_kg: "280.00",
              age_in_months: 41,
              status: "sold",
            },
            {
              reference_id: "cow_d34ce772",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "265.00",
              age_in_months: 38,
              status: "sold",
            },
          ],
          expense_details: [
            { title: "Cattle Purchase", amount: 945000 },
            { title: "Feed", date: "2024-10-02", amount: 245964 },
            { title: "Medical", date: "2024-10-07", amount: 19263 },
            { title: "Premium", date: "2024-10-18", amount: 14500 },
            {
              title: "Identification Cost",
              date: "2024-10-22",
              amount: 2501,
            },
            { title: "Operational Cost", date: "2024-10-22", amount: 83550 },
          ],
        },
        {
          img: "/farmerImages/farmerimg15.jpeg",
          thana: "Bera",
          union: "Kashinathpur",
          zilla: "Pabna",
          assets: 0,
          user_id: 5010,
          village: "Village: Kashinathpur, Union: Kashinathpur, Thana: Bera",
          initials: "SK",
          location: "Bajitpur, Bangladesh",
          policies: 0,
          join_date: "2025-10-14",
          com_org_id: 0,
          farmer_name: "Shamim Khan",
          mobile_number: "01785441192",
          profit: 2800,
          livestock_details: [
            {
              reference_id: "cow_f21bc882",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "260.00",
              age_in_months: 37,
              status: "sold",
            },
            {
              reference_id: "cow_e91cd551",
              color: "Black",
              breed: "Deshal",
              weight_kg: "240.00",
              age_in_months: 33,
              status: "sold",
            },
            {
              reference_id: "cow_a67ce221",
              color: "White",
              breed: "Friesian",
              weight_kg: "310.00",
              age_in_months: 50,
              status: "sold",
            },
            {
              reference_id: "cow_b92df771",
              color: "Red",
              breed: "Sindhi",
              weight_kg: "275.00",
              age_in_months: 42,
              status: "sold",
            },
            {
              reference_id: "cow_c12aa711",
              color: "Black",
              breed: "Sahiwal",
              weight_kg: "245.00",
              age_in_months: 34,
              status: "sold",
            },
            {
              reference_id: "cow_d88be992",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "265.00",
              age_in_months: 36,
              status: "sold",
            },
            {
              reference_id: "cow_f11de781",
              color: "White",
              breed: "Friesian",
              weight_kg: "305.00",
              age_in_months: 48,
              status: "sold",
            },
            {
              reference_id: "cow_a91bf162",
              color: "Black",
              breed: "Deshal",
              weight_kg: "250.00",
              age_in_months: 35,
              status: "sold",
            },
            {
              reference_id: "cow_b88cc221",
              color: "Red",
              breed: "Sindhi",
              weight_kg: "282.00",
              age_in_months: 41,
              status: "sold",
            },
            {
              reference_id: "cow_c77de111",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "258.00",
              age_in_months: 37,
              status: "sold",
            },
          ],
          expense_details: [
            { title: "Cattle Purchase", amount: 875000 },
            { title: "Feed", date: "2024-10-02", amount: 244524 },
            { title: "Medical", date: "2024-10-07", amount: 19560 },
            { title: "Premium", date: "2024-10-18", amount: 12500 },
            {
              title: "Identification Cost",
              date: "2024-10-22",
              amount: 2501,
            },
            { title: "Operational Cost", date: "2024-10-22", amount: 83540 },
          ],
        },
        {
          img: "/farmerImages/farmerimg16.jpeg",
          thana: "Kalkini",
          union: "Dasar",
          zilla: "Madaripur",
          assets: 0,
          user_id: 5011,
          village: "Village: Dasar Bazar, Union: Dasar, Thana: Kalkini",
          initials: "MK",
          location: "Bajitpur, Bangladesh",
          policies: 0,
          join_date: "2025-03-18",
          com_org_id: 0,
          farmer_name: "Md. Kamal Hossain",
          mobile_number: "01791234567",
          profit: 3350,
          livestock_details: [
            {
              reference_id: "cow_k11a01",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "272.00",
              age_in_months: 33,
              status: "sold",
            },
            {
              reference_id: "cow_k11a02",
              color: "Black",
              breed: "Friesian",
              weight_kg: "315.00",
              age_in_months: 42,
              status: "sold",
            },
            {
              reference_id: "cow_k11a03",
              color: "White",
              breed: "Sahiwal",
              weight_kg: "268.00",
              age_in_months: 31,
              status: "sold",
            },
            {
              reference_id: "cow_k11a04",
              color: "Red",
              breed: "Sindhi",
              weight_kg: "278.00",
              age_in_months: 38,
              status: "sold",
            },
            {
              reference_id: "cow_k11a05",
              color: "Brown",
              breed: "Friesian",
              weight_kg: "240.00",
              age_in_months: 28,
              status: "sold",
            },
            {
              reference_id: "cow_k11a06",
              color: "Black",
              breed: "Sahiwal",
              weight_kg: "285.00",
              age_in_months: 35,
              status: "sold",
            },
            {
              reference_id: "cow_k11a07",
              color: "White",
              breed: "Friesian",
              weight_kg: "325.00",
              age_in_months: 44,
              status: "sold",
            },
            {
              reference_id: "cow_k11a08",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "262.00",
              age_in_months: 30,
              status: "sold",
            },
            {
              reference_id: "cow_k11a09",
              color: "Black",
              breed: "Friesian",
              weight_kg: "235.00",
              age_in_months: 27,
              status: "sold",
            },
            {
              reference_id: "cow_k11a10",
              color: "Red",
              breed: "Sindhi",
              weight_kg: "280.00",
              age_in_months: 40,
              status: "sold",
            },
          ],
          expense_details: [
            { title: "Cattle Purchase", amount: 935000 },
            { title: "Feed", date: "2024-10-02", amount: 247778 },
            { title: "Medical", date: "2024-10-07", amount: 20248 },
            { title: "Premium", date: "2024-10-18", amount: 14448 },
            {
              title: "Identification Cost",
              date: "2024-10-22",
              amount: 2501,
            },
            { title: "Operational Cost", date: "2024-10-22", amount: 83670 },
          ],
        },
        {
          img: "/farmerImages/farmerimg8.jpeg",
          thana: "Alfadanga",
          union: "Panchuria",
          zilla: "Faridpur",
          assets: 0,
          user_id: 5012,
          village: "Village: Gopalpur, Union: Panchuria, Thana: Alfadanga",
          initials: "RS",
          location: "Bajitpur, Bangladesh",
          policies: 0,
          join_date: "2025-02-27",
          com_org_id: 0,
          farmer_name: "Rahima Sultana",
          mobile_number: "01876543219",
          profit: 3700,
          livestock_details: [
            {
              reference_id: "cow_a12b01",
              color: "Black",
              breed: "Friesian",
              weight_kg: "328.00",
              age_in_months: 43,
              status: "sold",
            },
            {
              reference_id: "cow_a12b02",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "290.00",
              age_in_months: 36,
              status: "sold",
            },
            {
              reference_id: "cow_a12b03",
              color: "White",
              breed: "Sahiwal",
              weight_kg: "265.00",
              age_in_months: 32,
              status: "sold",
            },
            {
              reference_id: "cow_a12b04",
              color: "Red",
              breed: "Sindhi",
              weight_kg: "282.00",
              age_in_months: 39,
              status: "sold",
            },
            {
              reference_id: "cow_a12b05",
              color: "Brown",
              breed: "Friesian",
              weight_kg: "238.00",
              age_in_months: 27,
              status: "sold",
            },
            {
              reference_id: "cow_a12b06",
              color: "Black",
              breed: "Sahiwal",
              weight_kg: "295.00",
              age_in_months: 37,
              status: "sold",
            },
            {
              reference_id: "cow_a12b07",
              color: "White",
              breed: "Friesian",
              weight_kg: "332.00",
              age_in_months: 45,
              status: "sold",
            },
            {
              reference_id: "cow_a12b08",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "270.00",
              age_in_months: 33,
              status: "sold",
            },
            {
              reference_id: "cow_a12b09",
              color: "Black",
              breed: "Friesian",
              weight_kg: "242.00",
              age_in_months: 29,
              status: "sold",
            },
            {
              reference_id: "cow_a12b10",
              color: "Red",
              breed: "Sindhi",
              weight_kg: "285.00",
              age_in_months: 41,
              status: "sold",
            },
          ],
          expense_details: [
            { title: "Cattle Purchase", amount: 920000 },
            { title: "Feed", date: "2024-10-02", amount: 227820 },
            { title: "Medical", date: "2024-10-07", amount: 19550 },
            { title: "Premium", date: "2024-10-18", amount: 13800 },
            {
              title: "Identification Cost",
              date: "2024-10-22",
              amount: 2501,
            },
            { title: "Operational Cost", date: "2024-10-22", amount: 83550 },
          ],
        },
      ],
    },
    {
      id: 3,
      shed_img: "shed_shariatpur_03.jpg",
      shed_name: "Cumilla Shed-01",
      shed_location: "Damudya Ghat, Damudya, Shariatpur, Bangladesh",
      shed_capacity: 40,
      assigned_farmer: 4,
      farmers: [
        {
          img: "/farmerImages/farmerimg17.jpeg",
          thana: "Damudya",
          union: "Darul Aman",
          zilla: "Shariatpur",
          assets: 0,
          user_id: 5013,
          village: "Village: Kadirpur, Union: Darul Aman, Thana: Damudya",
          initials: "AS",
          location: "Cumilla, Bangladesh",
          policies: 0,
          join_date: "2025-05-10",
          com_org_id: 0,
          farmer_name: "Abdus Sattar",
          mobile_number: "01755664433",
          profit: 2450,
          livestock_details: [
            {
              reference_id: "cow_d13c01",
              color: "White",
              breed: "Friesian",
              weight_kg: "310.00",
              age_in_months: 40,
              status: "sold",
            },
            {
              reference_id: "cow_d13c02",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "275.00",
              age_in_months: 34,
              status: "sold",
            },
            {
              reference_id: "cow_d13c03",
              color: "Black",
              breed: "Friesian",
              weight_kg: "232.00",
              age_in_months: 26,
              status: "sold",
            },
            {
              reference_id: "cow_d13c04",
              color: "White",
              breed: "Sahiwal",
              weight_kg: "260.00",
              age_in_months: 30,
              status: "sold",
            },
            {
              reference_id: "cow_d13c05",
              color: "Red",
              breed: "Sindhi",
              weight_kg: "272.00",
              age_in_months: 37,
              status: "sold",
            },
            {
              reference_id: "cow_d13c06",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "280.00",
              age_in_months: 35,
              status: "sold",
            },
            {
              reference_id: "cow_d13c07",
              color: "Black",
              breed: "Friesian",
              weight_kg: "318.00",
              age_in_months: 42,
              status: "sold",
            },
            {
              reference_id: "cow_d13c08",
              color: "White",
              breed: "Friesian",
              weight_kg: "240.00",
              age_in_months: 28,
              status: "sold",
            },
            {
              reference_id: "cow_d13c09",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "268.00",
              age_in_months: 32,
              status: "sold",
            },
            {
              reference_id: "cow_d13c10",
              color: "Red",
              breed: "Sindhi",
              weight_kg: "278.00",
              age_in_months: 39,
              status: "sold",
            },
          ],
          expense_details: [
            { title: "Cattle Purchase", amount: 955000 },
            { title: "Feed", date: "2024-10-02", amount: 250515 },
            { title: "Medical", date: "2024-10-07", amount: 18780 },
            { title: "Premium", date: "2024-10-18", amount: 14500 },
            {
              title: "Identification Cost",
              date: "2024-10-22",
              amount: 2501,
            },
            { title: "Operational Cost", date: "2024-10-22", amount: 83540 },
          ],
        },
        {
          img: "/farmerImages/farmerimg18.jpeg",
          thana: "Kapasia",
          union: "Tok",
          zilla: "Gazipur",
          assets: 0,
          user_id: 5014,
          village: "Village: Toknayan, Union: Tok, Thana: Kapasia",
          initials: "NH",
          location: "Cumilla, Bangladesh",
          policies: 0,
          join_date: "2025-06-19",
          com_org_id: 0,
          farmer_name: "Nur Hossain",
          mobile_number: "01554321987",
          profit: 3100,
          livestock_details: [
            {
              reference_id: "cow_k14d01",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "258.00",
              age_in_months: 31,
              status: "sold",
            },
            {
              reference_id: "cow_k14d02",
              color: "Black",
              breed: "Sahiwal",
              weight_kg: "288.00",
              age_in_months: 36,
              status: "sold",
            },
            {
              reference_id: "cow_k14d03",
              color: "White",
              breed: "Friesian",
              weight_kg: "322.00",
              age_in_months: 44,
              status: "sold",
            },
            {
              reference_id: "cow_k14d04",
              color: "Red",
              breed: "Sindhi",
              weight_kg: "275.00",
              age_in_months: 38,
              status: "sold",
            },
            {
              reference_id: "cow_k14d05",
              color: "Brown",
              breed: "Friesian",
              weight_kg: "245.00",
              age_in_months: 29,
              status: "sold",
            },
            {
              reference_id: "cow_k14d06",
              color: "Black",
              breed: "Sahiwal",
              weight_kg: "262.00",
              age_in_months: 32,
              status: "sold",
            },
            {
              reference_id: "cow_k14d07",
              color: "White",
              breed: "Sahiwal",
              weight_kg: "292.00",
              age_in_months: 37,
              status: "sold",
            },
            {
              reference_id: "cow_k14d08",
              color: "Brown",
              breed: "Friesian",
              weight_kg: "330.00",
              age_in_months: 45,
              status: "sold",
            },
            {
              reference_id: "cow_k14d09",
              color: "Black",
              breed: "Friesian",
              weight_kg: "238.00",
              age_in_months: 27,
              status: "sold",
            },
            {
              reference_id: "cow_k14d10",
              color: "Red",
              breed: "Sindhi",
              weight_kg: "280.00",
              age_in_months: 40,
              status: "sold",
            },
          ],
          expense_details: [
            { title: "Cattle Purchase", amount: 880000 },
            { title: "Feed", date: "2024-10-02", amount: 260300 },
            { title: "Medical", date: "2024-10-07", amount: 19700 },
            { title: "Premium", date: "2024-10-18", amount: 13000 },
            {
              title: "Identification Cost",
              date: "2024-10-22",
              amount: 2501,
            },
            { title: "Operational Cost", date: "2024-10-22", amount: 83550 },
          ],
        },
        {
          img: "/farmerImages/farmerimg10.jpeg",
          thana: "Lohagara",
          union: "Barakhain",
          zilla: "Narayanganj",
          assets: 0,
          user_id: 5015,
          village:
            "Village: Barakhain Bazar, Union: Barakhain, Thana: Lohagara",
          initials: "FB",
          location: "Cumilla, Bangladesh",
          policies: 0,
          join_date: "2025-01-14",
          com_org_id: 0,
          farmer_name: "Fatema Begum",
          mobile_number: "01987654321",
          profit: 2800,
          livestock_details: [
            {
              reference_id: "cow_l15e01",
              color: "White",
              breed: "Friesian",
              weight_kg: "312.00",
              age_in_months: 41,
              status: "sold",
            },
            {
              reference_id: "cow_l15e02",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "278.00",
              age_in_months: 34,
              status: "sold",
            },
            {
              reference_id: "cow_l15e03",
              color: "Black",
              breed: "Sahiwal",
              weight_kg: "255.00",
              age_in_months: 30,
              status: "sold",
            },
            {
              reference_id: "cow_l15e04",
              color: "Red",
              breed: "Sindhi",
              weight_kg: "270.00",
              age_in_months: 36,
              status: "sold",
            },
            {
              reference_id: "cow_l15e05",
              color: "Brown",
              breed: "Friesian",
              weight_kg: "242.00",
              age_in_months: 28,
              status: "sold",
            },
            {
              reference_id: "cow_l15e06",
              color: "Black",
              breed: "Friesian",
              weight_kg: "320.00",
              age_in_months: 43,
              status: "sold",
            },
            {
              reference_id: "cow_l15e07",
              color: "White",
              breed: "Sahiwal",
              weight_kg: "285.00",
              age_in_months: 35,
              status: "sold",
            },
            {
              reference_id: "cow_l15e08",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "260.00",
              age_in_months: 31,
              status: "sold",
            },
            {
              reference_id: "cow_l15e09",
              color: "Black",
              breed: "Friesian",
              weight_kg: "235.00",
              age_in_months: 26,
              status: "sold",
            },
            {
              reference_id: "cow_l15e10",
              color: "Red",
              breed: "Sindhi",
              weight_kg: "282.00",
              age_in_months: 39,
              status: "sold",
            },
          ],
          expense_details: [
            { title: "Cattle Purchase", amount: 892000 },
            { title: "Feed", date: "2024-10-02", amount: 272030 },
            { title: "Medical", date: "2024-10-07", amount: 20978 },
            { title: "Premium", date: "2024-10-18", amount: 13500 },
            {
              title: "Identification Cost",
              date: "2024-10-22",
              amount: 2501,
            },
            { title: "Operational Cost", date: "2024-10-22", amount: 83500 },
          ],
        },
        {
          img: "/farmerImages/farmerimg19.jpeg",
          thana: "Ishwardi",
          union: "Paksey",
          zilla: "Pabna",
          assets: 0,
          user_id: 5016,
          village:
            "Village: Paksey Puraton Bazar, Union: Paksey, Thana: Ishwardi",
          initials: "MM",
          location: "Cumilla, Bangladesh",
          policies: 0,
          join_date: "2025-07-05",
          com_org_id: 0,
          farmer_name: "Mofizul Islam",
          mobile_number: "01722334455",
          profit: 3400,
          livestock_details: [
            {
              reference_id: "cow_i16f01",
              color: "Black",
              breed: "Sahiwal",
              weight_kg: "295.00",
              age_in_months: 37,
              status: "sold",
            },
            {
              reference_id: "cow_i16f02",
              color: "White",
              breed: "Friesian",
              weight_kg: "330.00",
              age_in_months: 45,
              status: "sold",
            },
            {
              reference_id: "cow_i16f03",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "265.00",
              age_in_months: 32,
              status: "sold",
            },
            {
              reference_id: "cow_i16f04",
              color: "Red",
              breed: "Sindhi",
              weight_kg: "285.00",
              age_in_months: 40,
              status: "sold",
            },
            {
              reference_id: "cow_i16f05",
              color: "Black",
              breed: "Friesian",
              weight_kg: "240.00",
              age_in_months: 28,
              status: "sold",
            },
            {
              reference_id: "cow_i16f06",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "288.00",
              age_in_months: 35,
              status: "sold",
            },
            {
              reference_id: "cow_i16f07",
              color: "White",
              breed: "Friesian",
              weight_kg: "325.00",
              age_in_months: 44,
              status: "sold",
            },
            {
              reference_id: "cow_i16f08",
              color: "Black",
              breed: "Sahiwal",
              weight_kg: "258.00",
              age_in_months: 30,
              status: "sold",
            },
            {
              reference_id: "cow_i16f09",
              color: "Brown",
              breed: "Friesian",
              weight_kg: "245.00",
              age_in_months: 29,
              status: "sold",
            },
            {
              reference_id: "cow_i16f10",
              color: "Red",
              breed: "Sindhi",
              weight_kg: "280.00",
              age_in_months: 39,
              status: "sold",
            },
          ],
          expense_details: [
            { title: "Cattle Purchase", amount: 890000 },
            { title: "Feed", date: "2024-10-02", amount: 235780 },
            { title: "Medical", date: "2024-10-07", amount: 19515 },
            { title: "Premium", date: "2024-10-18", amount: 13500 },
            {
              title: "Identification Cost",
              date: "2024-10-22",
              amount: 2501,
            },
            { title: "Operational Cost", date: "2024-10-22", amount: 83550 },
          ],
        },
      ],
    },
    {
      id: 4,
      shed_img: "shed_gazipur_04.jpg",
      shed_name: "Savar Shed-02",
      shed_location: "Tok Bazar, Kapasia, Gazipur, Bangladesh",
      shed_capacity: 40,
      assigned_farmer: 4,
      farmers: [
        {
          img: "/farmerImages/farmerimg11.jpeg",
          thana: "Tongibari",
          union: "Autshahi",
          zilla: "Munshiganj",
          assets: 0,
          user_id: 5017,
          village: "Village: Autshahi, Union: Autshahi, Thana: Tongibari",
          initials: "SJ",
          location: "Savar, Bangladesh",
          policies: 0,
          join_date: "2025-08-21",
          com_org_id: 0,
          farmer_name: "Salma Khatun",
          mobile_number: "01833445566",
          profit: 2650,
          livestock_details: [
            {
              reference_id: "cow_t17g01",
              color: "Brown",
              breed: "Friesian",
              weight_kg: "238.00",
              age_in_months: 27,
              status: "sold",
            },
            {
              reference_id: "cow_t17g02",
              color: "White",
              breed: "Sahiwal",
              weight_kg: "262.00",
              age_in_months: 31,
              status: "sold",
            },
            {
              reference_id: "cow_t17g03",
              color: "Black",
              breed: "Sahiwal",
              weight_kg: "282.00",
              age_in_months: 35,
              status: "sold",
            },
            {
              reference_id: "cow_t17g04",
              color: "Red",
              breed: "Sindhi",
              weight_kg: "272.00",
              age_in_months: 37,
              status: "sold",
            },
            {
              reference_id: "cow_t17g05",
              color: "White",
              breed: "Friesian",
              weight_kg: "315.00",
              age_in_months: 42,
              status: "sold",
            },
            {
              reference_id: "cow_t17g06",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "268.00",
              age_in_months: 33,
              status: "sold",
            },
            {
              reference_id: "cow_t17g07",
              color: "Black",
              breed: "Friesian",
              weight_kg: "235.00",
              age_in_months: 26,
              status: "sold",
            },
            {
              reference_id: "cow_t17g08",
              color: "White",
              breed: "Sahiwal",
              weight_kg: "290.00",
              age_in_months: 36,
              status: "sold",
            },
            {
              reference_id: "cow_t17g09",
              color: "Brown",
              breed: "Friesian",
              weight_kg: "320.00",
              age_in_months: 43,
              status: "sold",
            },
            {
              reference_id: "cow_t17g10",
              color: "Red",
              breed: "Sindhi",
              weight_kg: "278.00",
              age_in_months: 38,
              status: "sold",
            },
          ],
          expense_details: [
            { title: "Cattle Purchase", amount: 950000 },
            { title: "Feed", date: "2024-10-02", amount: 235280 },
            { title: "Medical", date: "2024-10-07", amount: 19195 },
            { title: "Premium", date: "2024-10-18", amount: 14500 },
            {
              title: "Identification Cost",
              date: "2024-10-22",
              amount: 2501,
            },
            { title: "Operational Cost", date: "2024-10-22", amount: 83800 },
          ],
        },
        {
          img: "/farmerImages/farmerimg20.jpeg",
          thana: "Rajbari Sadar",
          union: "Mizanpur",
          zilla: "Rajbari",
          assets: 0,
          user_id: 5018,
          village:
            "Village: Khankhanapur, Union: Mizanpur, Thana: Rajbari Sadar",
          initials: "AK",
          location: "Savar, Bangladesh",
          policies: 0,
          join_date: "2025-09-12",
          com_org_id: 0,
          farmer_name: "Abdul Kuddus",
          mobile_number: "01788990011",
          profit: 3900,
          livestock_details: [
            {
              reference_id: "cow_r18h01",
              color: "Black",
              breed: "Friesian",
              weight_kg: "335.00",
              age_in_months: 46,
              status: "sold",
            },
            {
              reference_id: "cow_r18h02",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "298.00",
              age_in_months: 38,
              status: "sold",
            },
            {
              reference_id: "cow_r18h03",
              color: "White",
              breed: "Sahiwal",
              weight_kg: "272.00",
              age_in_months: 33,
              status: "sold",
            },
            {
              reference_id: "cow_r18h04",
              color: "Red",
              breed: "Sindhi",
              weight_kg: "288.00",
              age_in_months: 41,
              status: "sold",
            },
            {
              reference_id: "cow_r18h05",
              color: "Black",
              breed: "Friesian",
              weight_kg: "248.00",
              age_in_months: 29,
              status: "sold",
            },
            {
              reference_id: "cow_r18h06",
              color: "White",
              breed: "Friesian",
              weight_kg: "328.00",
              age_in_months: 44,
              status: "sold",
            },
            {
              reference_id: "cow_r18h07",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "292.00",
              age_in_months: 36,
              status: "sold",
            },
            {
              reference_id: "cow_r18h08",
              color: "Black",
              breed: "Sahiwal",
              weight_kg: "265.00",
              age_in_months: 32,
              status: "sold",
            },
            {
              reference_id: "cow_r18h09",
              color: "White",
              breed: "Friesian",
              weight_kg: "240.00",
              age_in_months: 27,
              status: "sold",
            },
            {
              reference_id: "cow_r18h10",
              color: "Red",
              breed: "Sindhi",
              weight_kg: "282.00",
              age_in_months: 39,
              status: "sold",
            },
          ],
          expense_details: [
            { title: "Cattle Purchase", amount: 890000 },
            { title: "Feed", date: "2024-10-02", amount: 236952 },
            { title: "Medical", date: "2024-10-07", amount: 20290 },
            { title: "Premium", date: "2024-10-18", amount: 13500 },
            {
              title: "Identification Cost",
              date: "2024-10-22",
              amount: 2501,
            },
            { title: "Operational Cost", date: "2024-10-22", amount: 83300 },
          ],
        },
        {
          img: "/farmerImages/farmerimg12.jpeg",
          thana: "Daulatpur",
          union: "Ramkrishnapur",
          zilla: "Kushtia",
          assets: 0,
          user_id: 5019,
          village:
            "Village: Hogolbaria, Union: Ramkrishnapur, Thana: Daulatpur",
          initials: "RH",
          location: "Savar, Bangladesh",
          policies: 0,
          join_date: "2025-10-30",
          com_org_id: 0,
          farmer_name: "Roksana Haque",
          mobile_number: "01911223344",
          profit: 3050,
          livestock_details: [
            {
              reference_id: "cow_d19i01",
              color: "White",
              breed: "Friesian",
              weight_kg: "318.00",
              age_in_months: 43,
              status: "sold",
            },
            {
              reference_id: "cow_d19i02",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "282.00",
              age_in_months: 36,
              status: "sold",
            },
            {
              reference_id: "cow_d19i03",
              color: "Black",
              breed: "Sahiwal",
              weight_kg: "258.00",
              age_in_months: 32,
              status: "sold",
            },
            {
              reference_id: "cow_d19i04",
              color: "Red",
              breed: "Sindhi",
              weight_kg: "275.00",
              age_in_months: 38,
              status: "sold",
            },
            {
              reference_id: "cow_d19i05",
              color: "Brown",
              breed: "Friesian",
              weight_kg: "242.00",
              age_in_months: 28,
              status: "sold",
            },
            {
              reference_id: "cow_d19i06",
              color: "White",
              breed: "Sahiwal",
              weight_kg: "288.00",
              age_in_months: 35,
              status: "sold",
            },
            {
              reference_id: "cow_d19i07",
              color: "Black",
              breed: "Friesian",
              weight_kg: "325.00",
              age_in_months: 44,
              status: "sold",
            },
            {
              reference_id: "cow_d19i08",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "262.00",
              age_in_months: 31,
              status: "sold",
            },
            {
              reference_id: "cow_d19i09",
              color: "White",
              breed: "Friesian",
              weight_kg: "238.00",
              age_in_months: 27,
              status: "sold",
            },
            {
              reference_id: "cow_d19i10",
              color: "Red",
              breed: "Sindhi",
              weight_kg: "280.00",
              age_in_months: 40,
              status: "sold",
            },
          ],
          expense_details: [
            { title: "Cattle Purchase", amount: 935000 },
            { title: "Feed", date: "2024-10-02", amount: 251500 },
            { title: "Medical", date: "2024-10-07", amount: 19394 },
            { title: "Premium", date: "2024-10-18", amount: 14000 },
            {
              title: "Identification Cost",
              date: "2024-10-22",
              amount: 2501,
            },
            { title: "Operational Cost", date: "2024-10-22", amount: 83500 },
          ],
        },
        {
          img: "/farmerImages/farmerimg13.jpeg",
          thana: "Gopalpur",
          union: "Mirzapur",
          zilla: "Tangail",
          assets: 0,
          user_id: 5020,
          village: "Village: Hemnagar, Union: Mirzapur, Thana: Gopalpur",
          initials: "JS",
          location: "Savar, Bangladesh",
          policies: 0,
          join_date: "2025-04-02",
          com_org_id: 0,
          farmer_name: "Jahanara Begum",
          mobile_number: "01923456789",
          profit: 2950,
          livestock_details: [
            {
              reference_id: "cow_g20j01",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "276.00",
              age_in_months: 34,
              status: "sold",
            },
            {
              reference_id: "cow_g20j02",
              color: "Black",
              breed: "Friesian",
              weight_kg: "312.00",
              age_in_months: 41,
              status: "sold",
            },
            {
              reference_id: "cow_g20j03",
              color: "White",
              breed: "Sahiwal",
              weight_kg: "260.00",
              age_in_months: 30,
              status: "sold",
            },
            {
              reference_id: "cow_g20j04",
              color: "Red",
              breed: "Sindhi",
              weight_kg: "270.00",
              age_in_months: 36,
              status: "sold",
            },
            {
              reference_id: "cow_g20j05",
              color: "Brown",
              breed: "Friesian",
              weight_kg: "240.00",
              age_in_months: 28,
              status: "sold",
            },
            {
              reference_id: "cow_g20j06",
              color: "Black",
              breed: "Sahiwal",
              weight_kg: "285.00",
              age_in_months: 35,
              status: "sold",
            },
            {
              reference_id: "cow_g20j07",
              color: "White",
              breed: "Friesian",
              weight_kg: "320.00",
              age_in_months: 43,
              status: "sold",
            },
            {
              reference_id: "cow_g20j08",
              color: "Brown",
              breed: "Sahiwal",
              weight_kg: "265.00",
              age_in_months: 32,
              status: "sold",
            },
            {
              reference_id: "cow_g20j09",
              color: "Black",
              breed: "Friesian",
              weight_kg: "235.00",
              age_in_months: 26,
              status: "sold",
            },
            {
              reference_id: "cow_g20j10",
              color: "Red",
              breed: "Sindhi",
              weight_kg: "278.00",
              age_in_months: 39,
              status: "sold",
            },
          ],
          expense_details: [
            { title: "Cattle Purchase", amount: 950000 },
            { title: "Feed", date: "2024-10-02", amount: 227900 },
            { title: "Medical", date: "2024-10-07", amount: 19600 },
            { title: "Premium", date: "2024-10-18", amount: 14500 },
            {
              title: "Identification Cost",
              date: "2024-10-22",
              amount: 2501,
            },
            { title: "Operational Cost", date: "2024-10-22", amount: 83400 },
          ],
        },
      ],
    },
  ],
};

export default function ProjectDetailsPage() {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    AOS.init();
  }, []);

  // Flatten all farmers from all sheds
  const allFarmers = StaticProjectsData.sheds.flatMap(
    (shed: any) => shed.farmers
  );

  // Add farmers to project data
  const project = { ...StaticProjectsData, farmers: allFarmers };

  const [activeShedId, setActiveShedId] = useState(
    StaticProjectsData.sheds[0]?.id || 1
  );

  // Pagination logic
  const totalPages = Math.ceil(project.farmers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFarmers = project.farmers.slice(startIndex, endIndex);

  const handleFarmerClick = (farmerId: number) => {
    console.log(farmerId);
    router.push(`/investments/completed-projects/farmer_details/${farmerId}`);
  };

  if (!project) return <p className="p-8">Loading...</p>;

  return (
    <div className="p-8 bg-linear-to-br from-emerald-50 via-white to-green-50 min-h-screen">
      <Section>
        {/* Back Button */}
        <button
          onClick={() => router.push("/investments")}
          data-aos="fade-down"
          className="cursor-pointer text-emerald-600 hover:text-emerald-700 flex items-center gap-2 font-semibold transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Dashboard
        </button>

        {/* Banner */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-emerald-100 overflow-hidden"
        >
          <div className="relative w-full">
            <div className="relative h-[500px] w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />

              {/* Gradient overlay ONLY on image */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 from-10% to-transparent to-30%"></div>
            </div>
            {/* Header */}
            <div className="absolute bottom-4 px-6 flex justify-between w-full">
              {/* Project name */}
              <div
                className="bg-emerald-950/60 backdrop-blur-xs px-4 py-2 rounded-lg shadow-md"
                data-aos="fade-right"
                data-aos-delay="700"
              >
                <h1 className="text-3xl font-bold text-emerald-100">
                  {project.title}
                </h1>
                <div className="flex items-center gap-2 mt-2">
                  <Users className="w-5 h-5 text-emerald-300" />
                  <p className="text-gray-300 font-">
                    {project.farmersAssigned} Farmers Assigned
                  </p>
                </div>
              </div>

              {/* Investor Details */}
              <div className="flex items-center gap-2">
                {/* My Investment */}
                <div
                  className="bg-emerald-950/60 backdrop-blur-xs px-4 py-2 rounded-lg shadow-md"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <h1 className="text-md font-bold text-emerald-300">
                    My Investment
                  </h1>
                  <div className="flex items-center gap- mt-">
                    <p className="text-2xl font-bold text-emerald-100 flex items-center gap-1">
                      <FaBangladeshiTakaSign
                        size={20}
                        className="text-emerald-400 mt-0.5"
                      />
                      {project.investment_amnt.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* ROI */}
                <div
                  className="bg-emerald-950/60 backdrop-blur-xs px-4 py-2 rounded-lg shadow-md"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <h1 className="text-md font-bold text-emerald-300">ROI</h1>
                  <div className="flex items-center gap- mt-">
                    <p className="text-2xl font-bold text-emerald-100">
                      {project.return_on_investment_percentage}%
                    </p>
                  </div>
                </div>

                {/* Expected Return */}
                {/* <div
                  className="bg-emerald-950/60 backdrop-blur-xs px-4 py-2 rounded-lg shadow-md"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <h1 className="text-md font-bold text-emerald-300">
                    Expected Return
                  </h1>
                  <div className="flex items-center gap- mt-">
                    <p className="text-2xl font-bold text-emerald-100 flex items-center gap-1">
                      <FaBangladeshiTakaSign
                        size={20}
                        className="text-emerald-400 mt-0.5"
                      />
                      {project.expected_return_amnt.toLocaleString()}
                    </p>
                  </div>
                </div> */}

                {/* Actual Return */}
                <div
                  className="bg-emerald-950/60 backdrop-blur-xs px-4 py-2 rounded-lg shadow-md"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <h1 className="text-md font-bold text-emerald-300">
                    Actual Return
                  </h1>
                  <div className="flex items-center gap- mt-">
                    <p className="text-2xl font-bold text-emerald-100 flex items-center gap-1">
                      <FaBangladeshiTakaSign
                        size={20}
                        className="text-emerald-400 mt-0.5"
                      />
                      {project.expected_return_amnt.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Overview + Allocation */}
          <div className="px-8 pb-6 pt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Project Overview */}
            <div className="lg:col-span-2">
              <h2 className="font-bold text-xl text-gray-900 mb-3">
                Project Overview
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {project.overview}
              </p>

              <div className="flex items-center gap-4 mt-6 h-full pb-12">
                <div className="flex items-center gap-2 bg-emerald-50/80 px-4 py-2 rounded-full">
                  <Calendar className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-medium text-emerald-700">
                    Started: {project.startDate}
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-emerald-50/80 px-4 py-2 rounded-full">
                  <Calendar className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-medium text-emerald-700">
                    Ended: {project.endDate}
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-emerald-50/80 px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-medium text-emerald-700">
                    Duration: {project.projectDuration} months
                  </span>
                </div>

                <div
                  className={`flex items-center gap-2 ${
                    project.status === "Completed"
                      ? "bg-rose-100 text-rose-700"
                      : "bg-emerald-50/80"
                  } px-4 py-2 rounded-full`}
                >
                  <TrendingUp
                    className={`w-4 h-4 ${
                      project.status === "Completed"
                        ? "text-rose-700"
                        : "text-emerald-600"
                    }`}
                  />
                  <span
                    className={`text-sm font-medium ${
                      project.status === "Completed"
                        ? "bg-rose-100 text-rose-700"
                        : " text-emerald-700"
                    }`}
                  >
                    Status: {project.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Allocation Block */}
            <div className="bg-emerald-50/80 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200">
              <div className="flex items-center gap-2 mb-2">
                {/* <DollarSign className="w-5 h-5 text-emerald-600" /> */}
                <p className="uppercase text-xs font-semibold text-emerald-700">
                  Project value
                </p>
              </div>
              <h3 className="text-3xl font-semibold text-emerald-800 mt-1 flex items-center gap-1">
                <FaBangladeshiTakaSign size={25} />
                {project.allocation.toLocaleString()}
              </h3>
              <p className="text-emerald-600 text-sm mt-3 leading-relaxed">
                Allocated for infrastructure, livestock, and operational costs.
              </p>
            </div>
          </div>
        </div>

        {project.status === "Completed" && (
          <>
            {/* Sheds Table */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="h-screen mt-16"
            >
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-5">
                <PiSolarRoofBold className="text-emerald-600 -mb-1" size={30} />{" "}
                Sheds
              </h2>

              {/* Dynamic Shed Tabs */}
              <div data-aos="fade-up" data-aos-delay="400" className="flex-1">
                <div className=" rounded-2xl overflow-hidden">
                  {/* Tab Headers */}
                  <div className="relative w-full mx-auto">
                    <div className="relative flex bg-emerald-100/80 p-1 rounded-2xl border border-emerald-400/30 backdrop-blur-lg overflow-x-auto">
                      {/* Sliding Highlight */}
                      <div
                        className="absolute top-1 bottom-1 bg-emerald-950/80 rounded-xl shadow-inner transition-transform duration-300 ease-out"
                        style={{
                          width: `${100 / StaticProjectsData.sheds.length}%`,
                          transform: `translateX(${
                            StaticProjectsData.sheds.findIndex(
                              (shed) => shed.id === activeShedId
                            ) * 100
                          }%)`,
                        }}
                      />

                      {/* Dynamic Shed Tabs */}
                      {StaticProjectsData.sheds.map((shed) => (
                        <button
                          key={shed.id}
                          onClick={() => {
                            setActiveShedId(shed.id);
                            setCurrentPage(1); // Reset to first page when switching sheds
                          }}
                          className={`relative z-10 flex-1 px-3 py-3 rounded-full font-semibold flex items-center justify-center gap-1 transition-all cursor-pointer text-xs sm:text-sm whitespace-nowrap ${
                            activeShedId === shed.id
                              ? "text-white"
                              : "text-emerald-800 hover:text-emerald-950 hover:scale-105"
                          }`}
                        >
                          <Package className="w-4 h-4" />
                          <span className="truncate">{shed.shed_name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tab Content - Farmers Table for Selected Shed */}
                  <div className="mt-5 bg-green-50 rounded-2xl drop-shadow-2xl border border-emerald-400/50">
                    <div data-aos="fade-in" data-aos-delay="200">
                      <div className="overflow-x-auto rounded-2xl">
                        <table className="w-full">
                          <thead className="bg-emerald-950/80 border-b border-emerald-100">
                            <tr>
                              <th className="px-6 py-4 text-left text-sm font-semibold text-emerald-100">
                                Name
                              </th>
                              <th className="px-6 py-4 text-left text-sm font-semibold text-emerald-100">
                                Mobile
                              </th>
                              <th className="px-6 py-4 text-left text-sm font-semibold text-emerald-100">
                                Location
                              </th>
                              {/* <th className="px-6 py-4 text-left text-sm font-semibold text-emerald-100">
                                Village
                              </th> */}
                              {/* <th className="px-6 py-4 text-left text-sm font-semibold text-emerald-100">
                                Join Date
                              </th> */}
                              <th className="px-6 py-4 text-left text-sm font-semibold text-emerald-100"></th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-emerald-50">
                            {(() => {
                              const activeShed = StaticProjectsData.sheds.find(
                                (shed) => shed.id === activeShedId
                              );
                              const shedFarmers = activeShed?.farmers || [];
                              const startIndex =
                                (currentPage - 1) * itemsPerPage;
                              const endIndex = startIndex + itemsPerPage;
                              const currentFarmers = shedFarmers.slice(
                                startIndex,
                                endIndex
                              );

                              return currentFarmers.map((farmer, idx) => (
                                <tr
                                  key={farmer.user_id}
                                  data-aos="fade-up"
                                  data-aos-delay={`${500 + idx * 50}`}
                                  className="hover:bg-emerald-200/30 transition-colors cursor-pointer group"
                                  onClick={() =>
                                    handleFarmerClick(farmer.user_id)
                                  }
                                >
                                  <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-semibold text-sm">
                                        {farmer.initials}
                                      </div>
                                      <span className="font-medium text-gray-900">
                                        {farmer.farmer_name}
                                      </span>
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 text-gray-700">
                                    {farmer.mobile_number}
                                  </td>
                                  <td className="px-6 py-4 text-gray-700">
                                    {farmer.location}
                                  </td>
                                  {/* <td
                                    className="px-6 py-4 text-gray-700 max-w-xs truncate"
                                    title={farmer.village}
                                  >
                                    {farmer.village}
                                  </td> */}
                                  {/* <td className="px-6 py-4 text-gray-700">
                                    {farmer.join_date}
                                  </td> */}
                                  <td className="px-6 py-4 text-gray-700">
                                    <ChevronRight className="w-5 h-5 text-emerald-600 group-hover:scale-125" />
                                  </td>
                                </tr>
                              ));
                            })()}
                          </tbody>
                        </table>
                      </div>

                      {/* Pagination for Shed Farmers */}
                      {(() => {
                        const activeShed = StaticProjectsData.sheds.find(
                          (shed) => shed.id === activeShedId
                        );
                        const shedFarmers = activeShed?.farmers || [];
                        const totalPages = Math.ceil(
                          shedFarmers.length / itemsPerPage
                        );

                        return (
                          totalPages > 1 && (
                            <div className="px-6 py-4 bg-emerald-50/50 border-t border-emerald-100">
                              <div className="flex items-center justify-between">
                                <div className="text-sm text-gray-600">
                                  Showing {(currentPage - 1) * itemsPerPage + 1}{" "}
                                  to{" "}
                                  {Math.min(
                                    currentPage * itemsPerPage,
                                    shedFarmers.length
                                  )}{" "}
                                  of {shedFarmers.length} farmers
                                </div>
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={() => setCurrentPage(1)}
                                    disabled={currentPage === 1}
                                    className="cursor-pointer p-2 rounded-lg hover:bg-emerald-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                  >
                                    <ChevronsLeft className="w-4 h-4 text-emerald-600" />
                                  </button>
                                  <button
                                    onClick={() =>
                                      setCurrentPage(currentPage - 1)
                                    }
                                    disabled={currentPage === 1}
                                    className="cursor-pointer p-2 rounded-lg hover:bg-emerald-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                  >
                                    <ChevronLeft className="w-4 h-4 text-emerald-600" />
                                  </button>

                                  <div className="flex items-center gap-1">
                                    {Array.from(
                                      { length: totalPages },
                                      (_, i) => i + 1
                                    ).map((page) => (
                                      <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`cursor-pointer px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                                          currentPage === page
                                            ? "bg-emerald-600 text-white"
                                            : "hover:bg-emerald-100 text-emerald-700"
                                        }`}
                                      >
                                        {page}
                                      </button>
                                    ))}
                                  </div>

                                  <button
                                    onClick={() =>
                                      setCurrentPage(currentPage + 1)
                                    }
                                    disabled={currentPage === totalPages}
                                    className="cursor-pointer p-2 rounded-lg hover:bg-emerald-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                  >
                                    <ChevronRight className="w-4 h-4 text-emerald-600" />
                                  </button>
                                  <button
                                    onClick={() => setCurrentPage(totalPages)}
                                    disabled={currentPage === totalPages}
                                    className="cursor-pointer p-2 rounded-lg hover:bg-emerald-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                  >
                                    <ChevronsRight className="w-4 h-4 text-emerald-600" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          )
                        );
                      })()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Section>
    </div>
  );
}
