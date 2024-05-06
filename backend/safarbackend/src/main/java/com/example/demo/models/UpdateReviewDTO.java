package com.example.demo.models;

public class UpdateReviewDTO {

    private int rating;

    private String comment;

    public UpdateReviewDTO() {
    }

    public UpdateReviewDTO(int rating, String comment) {
        this.rating = rating;
        this.comment = comment;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}