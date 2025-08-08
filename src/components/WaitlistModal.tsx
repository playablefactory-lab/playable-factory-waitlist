import { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent } from '@/components/ui/dialog';
interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const WaitlistModal = ({
  isOpen,
  onClose
}: WaitlistModalProps) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Waitlist signup:', {
      name,
      email
    });
    setIsSubmitted(true);
  };
  const handleClose = () => {
    setEmail('');
    setName('');
    setIsSubmitted(false);
    onClose();
  };
  return <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="card-premium max-w-md mx-4 rounded-lg border-0 p-0">
        <div className="relative p-8">
          <button onClick={handleClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
            
          </button>

          {!isSubmitted ? <>
              <div className="text-center mb-8">
                <h2 className="font-display text-3xl font-bold gradient-text mb-3">
                  Join the Revolution
                </h2>
                <p className="text-muted-foreground">
                  Be among the first to experience AI playables that adapt and learn.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input type="text" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} className="bg-muted/50 border-border focus:border-primary h-12" required />
                </div>
                <div>
                  <Input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} className="bg-muted/50 border-border focus:border-primary h-12" required />
                </div>
                <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 font-medium">
                  Secure My Spot
                </Button>
              </form>
            </> : <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="font-display text-3xl font-bold gradient-text mb-3">
                Welcome Aboard!
              </h2>
              <p className="text-muted-foreground mb-6">
                You're now on the waitlist. We'll be in touch soon with exclusive early access.
              </p>
              <Button onClick={handleClose} variant="outline" className="border-border hover:bg-muted/50">
                Close
              </Button>
            </div>}
        </div>
      </DialogContent>
    </Dialog>;
};
export default WaitlistModal;