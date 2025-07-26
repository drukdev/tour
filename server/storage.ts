import {
  User,
  Tour,
  Booking,
  Inquiry,
  Testimonial,
  BlogPost,
  Guide,
  Itinerary,
  ItineraryDay,
  CustomTourRequest,
  Prisma,
} from "@prisma/client";
import { db } from "./db";

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | null>;
  getUserByUsername(username: string): Promise<User | null>;
  createUser(user: Prisma.UserCreateInput): Promise<User>;

  // Tours
  getAllTours(): Promise<Tour[]>;
  getToursByCategory(category: string): Promise<Tour[]>;
  getTour(id: number): Promise<Tour | null>;
  createTour(tour: Prisma.TourCreateInput): Promise<Tour>;

  // Bookings
  getAllBookings(): Promise<Booking[]>;
  getBooking(id: number): Promise<Booking | null>;
  createBooking(booking: Prisma.BookingUncheckedCreateInput): Promise<Booking>;
  updateBookingStatus(id: number, status: string): Promise<Booking | null>;

  // Inquiries
  getAllInquiries(): Promise<Inquiry[]>;
  getInquiry(id: number): Promise<Inquiry | null>;
  createInquiry(inquiry: Prisma.InquiryCreateInput): Promise<Inquiry>;

  // Testimonials
  getAllTestimonials(): Promise<Testimonial[]>;
  getActiveTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: Prisma.TestimonialCreateInput): Promise<Testimonial>;

  // Blog Posts
  getAllBlogPosts(): Promise<BlogPost[]>;
  getPublishedBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: number): Promise<BlogPost | null>;
  createBlogPost(post: Prisma.BlogPostCreateInput): Promise<BlogPost>;

  // Guides
  getAllGuides(): Promise<Guide[]>;
  getGuide(id: number): Promise<Guide | null>;
  createGuide(guide: Prisma.GuideCreateInput): Promise<Guide>;
  updateGuideStatus(id: number, status: string): Promise<Guide | null>;
  getAvailableGuides(type: string): Promise<Guide[]>;

  // Itineraries
  getAllItineraries(): Promise<Itinerary[]>;
  getItinerary(id: number): Promise<Itinerary | null>;
  createItinerary(itinerary: Prisma.ItineraryUncheckedCreateInput): Promise<Itinerary>;
  updateItinerary(id: number, updates: Prisma.ItineraryUpdateInput): Promise<Itinerary | null>;
  deleteItinerary(id: number): Promise<boolean>;

  // Itinerary Days
  getItineraryDays(itineraryId: number): Promise<ItineraryDay[]>;
  createItineraryDay(day: Prisma.ItineraryDayUncheckedCreateInput): Promise<ItineraryDay>;
  updateItineraryDay(id: number, updates: Prisma.ItineraryDayUpdateInput): Promise<ItineraryDay | null>;
  deleteItineraryDay(id: number): Promise<boolean>;

  // Custom Tour Requests
  getAllCustomTourRequests(): Promise<CustomTourRequest[]>;
  getCustomTourRequest(id: number): Promise<CustomTourRequest | null>;
  createCustomTourRequest(request: Prisma.CustomTourRequestUncheckedCreateInput): Promise<CustomTourRequest>;
  updateCustomTourRequest(id: number, updates: Prisma.CustomTourRequestUpdateInput): Promise<CustomTourRequest | null>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | null> {
    return db.user.findUnique({ where: { id } });
  }

  async getUserByUsername(username: string): Promise<User | null> {
    return db.user.findUnique({ where: { username } });
  }

  async createUser(user: Prisma.UserCreateInput): Promise<User> {
    return db.user.create({ data: user });
  }

  async getAllTours(): Promise<Tour[]> {
    return db.tour.findMany({ where: { isActive: true } });
  }

  async getToursByCategory(category: string): Promise<Tour[]> {
    return db.tour.findMany({ where: { category } });
  }

  async getTour(id: number): Promise<Tour | null> {
    return db.tour.findUnique({ where: { id } });
  }

  async createTour(tour: Prisma.TourCreateInput): Promise<Tour> {
    return db.tour.create({ data: tour });
  }

  async getAllBookings(): Promise<Booking[]> {
    return db.booking.findMany();
  }

  async getBooking(id: number): Promise<Booking | null> {
    return db.booking.findUnique({ where: { id } });
  }

  async createBooking(booking: Prisma.BookingUncheckedCreateInput): Promise<Booking> {
    return db.booking.create({ data: booking });
  }

  async updateBookingStatus(id: number, status: string): Promise<Booking | null> {
    return db.booking.update({ where: { id }, data: { status } });
  }

  async getAllInquiries(): Promise<Inquiry[]> {
    return db.inquiry.findMany();
  }

  async getInquiry(id: number): Promise<Inquiry | null> {
    return db.inquiry.findUnique({ where: { id } });
  }

  async createInquiry(inquiry: Prisma.InquiryCreateInput): Promise<Inquiry> {
    return db.inquiry.create({ data: inquiry });
  }

  async getAllTestimonials(): Promise<Testimonial[]> {
    return db.testimonial.findMany();
  }

  async getActiveTestimonials(): Promise<Testimonial[]> {
    return db.testimonial.findMany({ where: { isActive: true } });
  }

  async createTestimonial(testimonial: Prisma.TestimonialCreateInput): Promise<Testimonial> {
    return db.testimonial.create({ data: testimonial });
  }

  async getAllBlogPosts(): Promise<BlogPost[]> {
    return db.blogPost.findMany();
  }

  async getPublishedBlogPosts(): Promise<BlogPost[]> {
    return db.blogPost.findMany({ where: { isPublished: true } });
  }

  async getBlogPost(id: number): Promise<BlogPost | null> {
    return db.blogPost.findUnique({ where: { id } });
  }

  async createBlogPost(post: Prisma.BlogPostCreateInput): Promise<BlogPost> {
    return db.blogPost.create({ data: post });
  }

  async getAllGuides(): Promise<Guide[]> {
    return db.guide.findMany({ orderBy: { createdAt: "desc" } });
  }

  async getGuide(id: number): Promise<Guide | null> {
    return db.guide.findUnique({ where: { id } });
  }

  async createGuide(guide: Prisma.GuideCreateInput): Promise<Guide> {
    return db.guide.create({ data: guide });
  }

  async updateGuideStatus(id: number, status: string): Promise<Guide | null> {
    return db.guide.update({ where: { id }, data: { status } });
  }

  async getAvailableGuides(type: string): Promise<Guide[]> {
    return db.guide.findMany({
      where: { registrationType: type },
      orderBy: { createdAt: "desc" },
    });
  }

  async getAllItineraries(): Promise<Itinerary[]> {
    return db.itinerary.findMany({ orderBy: { createdAt: "desc" } });
  }

  async getItinerary(id: number): Promise<Itinerary | null> {
    return db.itinerary.findUnique({ where: { id } });
  }

  async createItinerary(itinerary: Prisma.ItineraryUncheckedCreateInput): Promise<Itinerary> {
    return db.itinerary.create({ data: itinerary });
  }

  async updateItinerary(id: number, updates: Prisma.ItineraryUpdateInput): Promise<Itinerary | null> {
    return db.itinerary.update({ where: { id }, data: updates });
  }

  async deleteItinerary(id: number): Promise<boolean> {
    const result = await db.itinerary.delete({ where: { id } });
    return !!result;
  }

  async getItineraryDays(itineraryId: number): Promise<ItineraryDay[]> {
    return db.itineraryDay.findMany({
      where: { itineraryId },
      orderBy: { dayNumber: "asc" },
    });
  }

  async createItineraryDay(day: Prisma.ItineraryDayUncheckedCreateInput): Promise<ItineraryDay> {
    return db.itineraryDay.create({ data: day });
  }

  async updateItineraryDay(id: number, updates: Prisma.ItineraryDayUpdateInput): Promise<ItineraryDay | null> {
    return db.itineraryDay.update({ where: { id }, data: updates });
  }

  async deleteItineraryDay(id: number): Promise<boolean> {
    const result = await db.itineraryDay.delete({ where: { id } });
    return !!result;
  }

  async getAllCustomTourRequests(): Promise<CustomTourRequest[]> {
    return db.customTourRequest.findMany({ orderBy: { createdAt: "desc" } });
  }

  async getCustomTourRequest(id: number): Promise<CustomTourRequest | null> {
    return db.customTourRequest.findUnique({ where: { id } });
  }

  async createCustomTourRequest(request: Prisma.CustomTourRequestUncheckedCreateInput): Promise<CustomTourRequest> {
    return db.customTourRequest.create({ data: request });
  }

  async updateCustomTourRequest(id: number, updates: Prisma.CustomTourRequestUpdateInput): Promise<CustomTourRequest | null> {
    return db.customTourRequest.update({ where: { id }, data: updates });
  }
}

export const storage = new DatabaseStorage();
