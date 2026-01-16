import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Service name is required'],
      trim: true,
      maxlength: [100, 'Service name cannot exceed 100 characters']
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    description: {
      type: String,
      required: [true, 'Service description is required'],
      maxlength: [500, 'Description cannot exceed 500 characters']
    },
    fullDescription: {
      type: String,
      required: [true, 'Full description is required']
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price cannot be negative']
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: ['development', 'design', 'security', 'optimization', 'consulting', 'maintenance']
    },
    features: [{
      type: String
    }],
    deliveryTime: {
      type: String,
      required: [true, 'Delivery time is required']
    },
    image: {
      type: String,
      default: '/images/default-service.jpg'
    },
    isActive: {
      type: Boolean,
      default: true
    },
    tags: [{
      type: String
    }]
  },
  {
    timestamps: true
  }
);

// Create index for search
serviceSchema.index({ name: 'text', description: 'text', tags: 'text' });

const Service = mongoose.model('Service', serviceSchema);

export default Service;
