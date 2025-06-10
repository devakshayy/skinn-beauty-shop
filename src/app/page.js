'use client'
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import React, { useState, useEffect } from "react";


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 return (
    <>
       <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
       <Footer/>
    </>
  )
}
