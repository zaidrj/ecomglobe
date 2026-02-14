/**
 * Case Study Card Component
 * 
 * Displays a single case study card with hero image, title, challenge, solutions, results, testimonial, and rating.
 * 
 * @component
 */

import OptimizedImage from '@/components/ui/OptimizedImage';
import type { CaseStudy } from '@/types';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  className?: string;
}

export default function CaseStudyCard({
  caseStudy,
  className = "",
}: CaseStudyCardProps) {
  return (
    <div className={`bg-[rgba(7,7,7,0.8)] border border-[#ab78e9] border-solid rounded-[10px] overflow-hidden ${className}`}>
      {/* Hero image */}
      <div className="relative h-[203px] w-full overflow-hidden rounded-tl-[10px] rounded-tr-[10px]">
        <OptimizedImage
          src={caseStudy.heroImage}
          alt={caseStudy.title}
          width={1225}
          height={203}
          className="absolute h-[377.16%] left-0 max-w-none top-[-130%] w-full"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.7)]" />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 space-y-4 lg:space-y-6">
        {/* Title */}
        <h3 className="capitalize font-lexend font-bold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] text-white leading-normal">
          {caseStudy.title}
        </h3>

        {/* Challenge section */}
        <div className="space-y-2">
          <h4 className="capitalize font-lexend font-bold text-[#f4dbff] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px]">
            The Challenge
          </h4>
          <p className="font-red-hat-display font-normal text-[#c8cdd2] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] leading-normal">
            {caseStudy.challenge}
          </p>
        </div>

        {/* Solution section */}
        <div className="space-y-2">
          <h4 className="capitalize font-lexend font-bold text-[#f4dbff] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px]">
            Our Solution
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {caseStudy.solutions.map((solution, index) => (
              <div key={index} className="flex items-start gap-2 sm:gap-3">
                <OptimizedImage
                  src="/images/case-studies/icons/checkmark.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="mt-1 shrink-0 size-[16px] sm:size-[18px]"
                />
                <p className="font-red-hat-display font-normal text-[#c8cdd2] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] leading-normal">
                  {solution}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Results section */}
        <div className="space-y-2">
          <h4 className="capitalize font-lexend font-bold text-[#f4dbff] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px]">
            The Results
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Revenue Growth */}
            <div className="space-y-2">
              <p className="capitalize font-lexend font-medium text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px]">
                Revenue Growth
              </p>
              <p className="font-lexend font-normal text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48.215px] text-white leading-[1.3]">
                {caseStudy.results.revenueGrowth.percentage}
              </p>
              <p className="font-red-hat-display font-normal text-[#c8cdd2] text-[12px] sm:text-[14px] md:text-[15px] lg:text-[17.394px] leading-normal">
                {caseStudy.results.revenueGrowth.description}
              </p>
            </div>

            {/* Rank Improvement */}
            <div className="space-y-2">
              <p className="capitalize font-lexend font-medium text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px]">
                Rank Improvement
              </p>
              <p className="font-lexend font-normal text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48.215px] text-white leading-[1.3]">
                {caseStudy.results.rankImprovement.percentage}
              </p>
              <p className="font-red-hat-display font-normal text-[#c8cdd2] text-[12px] sm:text-[14px] md:text-[15px] lg:text-[17.394px] leading-normal">
                {caseStudy.results.rankImprovement.description}
              </p>
            </div>

            {/* Conversion Rate */}
            <div className="space-y-2 sm:col-span-2 lg:col-span-1">
              <p className="capitalize font-lexend font-medium text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px]">
                Conversion Rate
              </p>
              <p className="font-lexend font-normal text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48.215px] text-white leading-[1.3]">
                {caseStudy.results.conversionRate.percentage}
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="pt-4 border-t border-[#ab78e9] space-y-3">
          <p className="font-red-hat-display font-normal italic text-[#c8cdd2] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] leading-normal">
            "{caseStudy.testimonial}"
          </p>
          
          {/* Author and rating */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <p className="capitalize font-lexend font-medium text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px]">
                {caseStudy.author.name}
              </p>
              <p className="font-red-hat-display font-normal text-[#ab78e9] text-[12px] sm:text-[14px] md:text-[15px] lg:text-[17.394px]">
                {caseStudy.author.role}
              </p>
            </div>
            
            {/* Rating stars */}
            <div className="flex gap-1 sm:gap-2">
              {Array.from({ length: caseStudy.rating }).map((_, i) => (
                <OptimizedImage
                  key={i}
                  src="/images/case-studies/icons/star.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="size-[16px] sm:size-[18px]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

