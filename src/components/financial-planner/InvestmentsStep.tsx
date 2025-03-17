
import { PiggyBank } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { StepComponentProps } from "@/types/financialPlanner";
import { StepHeader } from "./StepHeader";

export const InvestmentsStep = ({ 
  formData, 
  handleInputChange, 
  handleSliderChange,
  getRiskLevel
}: StepComponentProps) => {
  return (
    <div className="space-y-6">
      <StepHeader 
        icon={<PiggyBank className="h-5 w-5 text-primary" />}
        title="Investment & Savings"
      />
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="currentSavings">Current Savings</Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
            <Input 
              id="currentSavings"
              name="currentSavings"
              className="pl-8"
              value={formData.currentSavings}
              onChange={handleInputChange}
              placeholder="0"
            />
          </div>
        </div>
        
        <div>
          <Label htmlFor="currentInvestments">Current Investments</Label>
          <Textarea 
            id="currentInvestments"
            name="currentInvestments"
            value={formData.currentInvestments}
            onChange={handleInputChange}
            placeholder="List your current investments (stocks, mutual funds, real estate)"
            className="min-h-[100px]"
          />
        </div>
        
        <div>
          <Label htmlFor="investmentAmount">Investment Amount</Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
            <Input 
              id="investmentAmount"
              name="investmentAmount"
              className="pl-8"
              value={formData.investmentAmount}
              onChange={handleInputChange}
              placeholder="0"
            />
          </div>
        </div>
        
        <div>
          <Label htmlFor="riskTolerance" className="mb-2 block">
            Risk Tolerance: {formData.riskTolerance} - {getRiskLevel(formData.riskTolerance)}
          </Label>
          <Slider 
            id="riskTolerance"
            min={1}
            max={10}
            step={1}
            defaultValue={[formData.riskTolerance]}
            onValueChange={(value) => handleSliderChange('riskTolerance', value)}
            showValue
            formatValue={(value) => `${value}/10 (${getRiskLevel(value)})`}
          />
        </div>
      </div>
    </div>
  );
};
