from fastapi import FastAPI
from backend.models import models
from backend.database import engine
from backend.routes import user_routes, exam_routes, resource_routes

app = FastAPI()

models.Base.metadata.create_all(bind=engine)

app.include_router(user_routes.router, prefix="/api")
app.include_router(exam_routes.router, prefix="/api")
app.include_router(resource_routes.router, prefix="/api")
