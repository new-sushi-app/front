import React from "react";
import {FooterLink} from "@app/common/components/footer-link/footer-link";

export const Footer = () => {
  return (
    <div className="bg-gray-900 pt-12 px-12 pb-8">
        <div>
            <div className="mb-4">
                <span className="uppercase font-bold text-sm text-zinc-500">Контакти</span>
            </div>
            <div className="mb-8">
                <ul>
                    <FooterLink href="tel:+3803339900"> 044 223 33 23</FooterLink>
                    <FooterLink href="mailto:info@sushi.app"> info@sushi.app</FooterLink>
                </ul>
            </div>
            <hr className=" relative left-[-3rem] w-[calc(100%_+_6rem)] border-zinc-500 mb-8"/>
        <div>
            <span className="text-xl font-semibold text-white"> 🍣 Sushi</span>
        </div>
        </div>
    </div>
  );
};
